import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StringToDateService} from "string-to-date-convert";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'string-to-date';

  form: FormGroup;

  format1 = '22042021';
  format2 = '22/11/2022';
  format3 = '12/31/2022';
  format4 = '2009-01-31';

  constructor(private fb: FormBuilder,
              private stringToDate: StringToDateService){
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      formate: [null]
    })
  }

  testingDates(date, format){
    debugger
    this.form.controls['formate'].setValue(this.stringToDate.stringToDate(date, format));
  }

}
