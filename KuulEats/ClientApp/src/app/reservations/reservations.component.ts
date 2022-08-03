import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(2022,12,31);
  myForm: FormGroup ;
  constructor() { }

  ngOnInit(): void {
     this.myForm= new FormGroup({
      StartDate: new FormControl('' ,[Validators.required]),
      StartTime: new FormControl('' ,[Validators.required]),
      People: new FormControl('' ,[Validators.required]),
      Description: new FormControl('', [Validators.required]),
     
    });
  }
  onSubmit(form: any) {
    console.log(form.value)
   // this.authService.Register(form.value);
    }
}
