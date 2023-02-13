import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  showDetails: boolean = false;
  choices: string[] = ['Basic', 'Pro', 'Pro+']
  formObj = {
    email: '',
    choices: '',
    password: ''
  }
  submitForm(form: NgForm) {
    this.formObj.choices = form.value.choices;
    this.formObj.email = form.value.email;
    this.formObj.password = form.value.password;
    this.showDetails = true;
    form.reset();
  }
}
