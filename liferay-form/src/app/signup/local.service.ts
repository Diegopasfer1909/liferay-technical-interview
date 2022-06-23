import { Injectable } from '@angular/core';
import { SignUpDTO } from './signUpDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  saveSignUpDataLocally(signUpData:SignUpDTO){
    localStorage.setItem("SignUpData",JSON.stringify(signUpData));
  }

  retrieveSignUpDataLocallySaved():SignUpDTO{
    return (localStorage.getItem("SignUpData"))? (JSON.parse(localStorage.getItem("SignUpData") as string) as SignUpDTO) : new SignUpDTO(null);
  }

  cleanLocalStorageInfo(){
    localStorage.removeItem("SignUpData");
  }
}
