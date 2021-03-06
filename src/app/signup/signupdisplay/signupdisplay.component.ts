import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SignupdataService } from '../signupdata.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signupdisplay',
  templateUrl: './signupdisplay.component.html',
  styleUrls: ['./signupdisplay.component.css']
})
export class SignupdisplayComponent implements OnInit {
  [x: string]: any;
  signupForm: FormGroup;
  invalidArrayNames: String[] = [
    'jinal',
    'shah',
    'krunal'
  ];

  constructor(private _signupdata:SignupdataService,private _routs:Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email_id: new FormControl(null, [Validators.required, Validators.email]),

      password_group: new FormGroup({
        user_password: new FormControl(null, [Validators.required]),
        user_confirm_password: new FormControl(null,[Validators.required])
      }, [this.passwordMatch.bind(this)]),

      user_type: new FormControl('user'),
      user_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*'), this.checkUname.bind(this)]),
      address: new FormControl(null),
      mobile_no: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      dob:new FormControl(null)
    });

  }
  onSignup() {

    let userobj = {
      email_id: this.signupForm.value.email_id,
      password: this.signupForm.value.password_group.user_password,
      user_type: this.signupForm.value.user_type,
      user_name: this.signupForm.value.user_name,
      address: this.signupForm.value.address,
      mobile_no: this.signupForm.value.mobile_no,
      dob:this.signupForm.value.dob
    };
    console.log(userobj);
    this._signupdata.signup(userobj).subscribe(
      (data:any)=>{
        console.log(data);
        this._routs.navigate(['nav/user']);
      }
    );
  }
  passwordMatch(c: AbstractControl): { [s: string]: boolean } {
    const pass = c.get('user_password').value;
    const cpass = c.get('user_confirm_password').value;
    if (pass != cpass) {
      return { 'BOTH PASSWORD MUST BE SAME': true };
    }
    return null;
  }
  checkUname(c: AbstractControl): { [s: string]: boolean } {

    if (this.invalidArrayNames.indexOf(c.value) != -1) {
      return { 'invalidName': true };
    }
    return null;
  }

}
