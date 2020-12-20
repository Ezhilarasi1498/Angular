import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login page';
  imgUrl= "https://icon2.cleanpng.com/20180319/epw/kisspng-india-login-computer-icons-emoticon-medicine-user-login-icon-5ab05c8bc2f8d1.4479395815215074677986.jpg";
  uname:string;
  email:string;
  psw:string;

  loginFunc(){
    
    console.log("UserName :",this.uname );
    console.log("Email Id :",this.email );
    console.log("Password :",this.psw );
  }
}
