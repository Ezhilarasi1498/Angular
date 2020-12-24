import { Directive,Input   } from '@angular/core';
import { Validator, ValidationErrors, FormGroup, NG_VALIDATORS } from '@angular/forms';
import { MustMatch } from 'src/app/custom.validator';
@Directive({
  selector: '[mustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchValidatorDirective, multi: true }]
})
export class MatchValidatorDirective implements Validator{

  @Input('mustMatch') mustMatch: string[] = [];

    validate(formGroup: FormGroup): ValidationErrors {
        return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }
}
