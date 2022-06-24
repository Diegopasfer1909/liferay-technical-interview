export class SignUpDTO {//Class with optional properties used to tipify the object when saving and retrieving it from the local storage
  name?: string;
  firstSurname?: string;
  secondSurname?: string;
  birthDate?: string;
  email?: string;
  recaptcha?: any;
  saveDate?:any;

  constructor(object: any) {
    if (object) {
      this.name = object['name'];
      this.firstSurname = object['firstSurname'];
      this.secondSurname = object['secondSurname'];
      this.birthDate = object['birthDate'];
      this.email = object['email'];
      this.recaptcha = object['recaptcha'] !== null;
      this.saveDate = object['saveDate'];
    }
  }
}
