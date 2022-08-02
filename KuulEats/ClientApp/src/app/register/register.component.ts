import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

myForm: FormGroup ;
  constructor() { }

  ngOnInit(): void {
     this.myForm= new FormGroup({
      UserName: new FormControl('' ,[Validators.required, Validators.email]),
      Email: new FormControl('' ,[Validators.required, Validators.email]),
      Contactno: new FormControl('' ,[Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
      PasswordKey: new FormControl('', [Validators.required])
    });
  }
  onSubmit(form: any) {
  console.log(form.value)
  }
}
