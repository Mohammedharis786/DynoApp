import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timeInterval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {


  countNumber: any
  userForm: any
  otpFormNotification: boolean = false;
  disableButton: boolean = true;
  displayTimer: any
  otpError:boolean=false
  errorMessage :string=''
  showLoginButton:boolean=true;
  showOtpButton:boolean=false;
  inputValue: string = '';

  constructor(private router:Router) {

  }
  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+.[a-zA-Z]+@tibilsolutions.com$')]),
      otp :new FormControl ('',Validators.required)
    })
  }

  ngAfterViewInit() {
    this.timerCount(2);
  }

  timerCount(minute: number) {

    let min: number = minute * 60
    let firstZero: any = '0';
    let sec = 60;
    const timerCount = setInterval(() => {
      min--
      if (sec != 0) {
        sec--
      } else sec = 59;

      if (sec < 10) {
        firstZero = '0' + sec;
      }
      else firstZero = sec

      if (min === 0) {
        clearInterval(timerCount);
      this.otpError = true;
      this.errorMessage="'OTP has expired'";
      console.log(this.errorMessage);
      console.log(this.otpError);
      this.showLoginButton =false;
      this.showOtpButton=true;
      }

      this.displayTimer = `${Math.floor(min / 60)}:${firstZero}`;
    }, 1000);
    console.log(timerCount);
  }


  showOtpForm() {
    this.otpFormNotification = true;
  }

  enableButton() {
    this.disableButton = false;
  }
  onSubmit(){
    
  }

  getEmail() {
    return this.userForm.get('email');
  }

  changingButton(){
    this.showLoginButton=true;
    this.showOtpButton=false;
    this.timerCount(2);
    this.errorMessage='';

  }
  homepge(){
    this.router.navigateByUrl('./layout')
  }



  isInputEmpty(): boolean {
    return this.inputValue.length === 0;
  }
}
