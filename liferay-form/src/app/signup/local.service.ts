import { Injectable } from '@angular/core';
import { SignUpDTO } from './signUpDTO';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  /**
   *
   * @param signUpData
   * Function that saves the Sign Up information in the local storage
   */
  saveSignUpDataLocally(signUpData:SignUpDTO){
    localStorage.setItem("SignUpData",JSON.stringify(signUpData));
  }

  /**
   *
   * @returns SignUpDTO
   * Function that retrieves the data from the local storage, if there's no user data then in returns the object with null data
   */
  retrieveSignUpDataLocallySaved():SignUpDTO{
    return (localStorage.getItem("SignUpData"))? (JSON.parse(localStorage.getItem("SignUpData") as string) as SignUpDTO) : new SignUpDTO(null);
  }

  /**
   * Function that cleans the information form the local storage related to SignUpData
   */
  cleanLocalStorageInfo(){
    localStorage.removeItem("SignUpData");
  }
}
