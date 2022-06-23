export class SignUpDTO {
  name?: string;
  firstSurname?: string;
  secondSurname?: string;
  birthDate?: string;
  email?: string;
  recaptcha?: any;

  constructor(object: any) {
    if (object) {
      this.name = object['name'];
      this.firstSurname = object['firstSurname'];
      this.secondSurname = object['secondSurname'];
      this.birthDate = object['birthDate'];
      this.email = object['email'];
      this.recaptcha = object['recaptcha'] !== null;
    }
  }
}
