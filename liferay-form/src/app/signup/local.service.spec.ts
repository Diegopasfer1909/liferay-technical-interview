import { TestBed } from '@angular/core/testing';

import { LocalService } from './local.service';
import { SignUpDTO } from './signUpDTO';

describe('LocalService', () => {
  let service: LocalService;
  let data = new SignUpDTO({
    name: "Nombre",
    firstSurname: "Apellido1",
    secondSurname: "Apellido2",
    birthDate: "1999-07-04",
    email: "ejemplo@gmail.com",
    recaptcha: true
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save in localstorage', () => {
    service.saveSignUpDataLocally(data);
    expect(localStorage.getItem("SignUpData")).toBeDefined;
  });

  it('should retrieve data from localstorage', () => {
    localStorage.setItem("SignUpData", JSON.stringify(data))
    expect(service.retrieveSignUpDataLocallySaved()).toBeDefined;
  });

  it('should clean local storage data', () => {
    service.cleanLocalStorageInfo();
    expect(localStorage.getItem("SignUpData")).not.toBeDefined;
  });
});
