import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from './local.service';
import { SignUpDTO } from './signUpDTO';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  siteKey:string= "";
  formSignUp!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private localService: LocalService
  ) {
  }
  ngOnInit(): void {
    this.siteKey = "6LcTd48gAAAAAMliqdON1eUazMKZZDPDIrC5yK5o";//Site key used for captcha identifier
    let data = this.localService.retrieveSignUpDataLocallySaved();//Retrieve user data in case there's any
    const isEmpty = Object.keys(data).length == 0;

    /**
     *  If the form is already saved in the local storage we insert all the values except the captcha in the form for the user
     * emulating in this way the remember found in logins for other pages
    */
    this.formSignUp = this.fb.group({
      name: [isEmpty? '' : data.name, Validators.required],
      firstSurname: [isEmpty? '' : data.firstSurname, Validators.required],
      secondSurname: [isEmpty? '' : data.secondSurname, Validators.required],
      birthDate: [isEmpty? '' : data.birthDate, Validators.required],
      email: [isEmpty? '' : data.email,[Validators.required,Validators.email]],
      recaptcha: ['', Validators.required]
    })

  }
  /**
   * This function calls LocalService to save the Sign Up information of the user in the Local Storage
   */
  signUp(){
    this.localService.saveSignUpDataLocally(new SignUpDTO(this.formSignUp.value));
    console.log(this.localService.retrieveSignUpDataLocallySaved());
  }
  /**
   * This function calls LocalService to clean the information about the SignUp
   * Afterwards cleans form data
   */
  cleanForm(){
    this.localService.cleanLocalStorageInfo();
    this.formSignUp.reset();
  }
}
