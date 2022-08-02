import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup ;
  constructor() { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      UserName: new FormControl('' ,[Validators.required, Validators.email]),

      Password: new FormControl('', [Validators.required]),

    });
  }

  onSubmit(form: any) {
    console.log(form.value);

  }

}
