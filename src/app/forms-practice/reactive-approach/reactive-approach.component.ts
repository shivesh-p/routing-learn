import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {
  statuses: string[] = ['Stable', 'Declining', 'Dead']
  userForm: FormGroup;
  customNameValidator(control: FormControl): { [key: string]: boolean } {
    return control.value?.indexOf('bob') !== -1 ? { 'invalidName': true } : null;
  }
  customNameValidatorAsync(control: FormControl): Promise<{ [key: string]: boolean }>
    | Observable<{ [key: string]: boolean }> {
    let returnPromise: Promise<{ [key: string]: boolean; }> | Observable<{ [key: string]: boolean; }>;

    returnPromise = new Promise<{ [key: string]: boolean }>((resolve) => {
      setTimeout(() => {
        resolve(
          control.value?.indexOf('test') !== -1 ? { 'invalidName': true } : null
        )
      }, 2000);
    });

    return returnPromise;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.customNameValidator], this.customNameValidatorAsync),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable', [Validators.required])

    });
  }
  submitForm() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
