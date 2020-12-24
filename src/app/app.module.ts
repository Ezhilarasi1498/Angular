import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { NewCompComponent } from './new-comp/new-comp.component';
import { FormsComponent } from './forms/forms.component';
import { MatchValidatorDirective } from './match-validator.directive';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    FormsComponent,
    MatchValidatorDirective,
    //TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
