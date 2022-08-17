import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../validators/username.validators';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  constructor() { }

  signupForm = new FormGroup({
    username: new FormControl('',  [
      Validators.required,
      Validators.minLength(20),
      UsernameValidators.cannotContainSpace
    ]),

    password: new FormControl('', Validators.required),
  })

  ngOnInit() {
  }

  get username(){
    return this.signupForm.get('username')
  }

  get password(){
    return this.signupForm.get('password')
  }

}