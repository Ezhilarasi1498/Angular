import { Component, OnInit } from '@angular/core';

import{ FormBuilder, FormGroup, Validators} from '@angular/forms' 
import { MustMatch } from 'src/app/custom.validator';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  registerForm : FormGroup;
  submitted:boolean=false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      title:['', Validators.required],
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(5)]],
      confirmPassword:['', Validators.required],
      agree:['',Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }
  submitForm() {
    this.submitted=true;
    if (this.registerForm.valid) {
      alert("Form Submitted")
        console.log(this.registerForm.getRawValue());
    } else {
      
        console.log('There is a problem with the form');
        return;
    }
  }

}
