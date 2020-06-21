import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // source: https://stackoverflow.com/questions/40513352/email-validation-using-form-builder-in-angular-2-latest-version
  public emailRegex: RegExp = /[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?/g;
  // source: https://stackoverflow.com/a/19605207
  public passwordRegex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g;
  public postalCodeRegex: RegExp = /[0-9]{4}/g;

  public dateFormat = 'YYYY-MM-DD';
  public visualDateFormat = 'dd DD-MM-YYYY';
  public visualDateTimeFormat = 'dd DD-MM-YYYY HH:mm';
  public mailDateFormat = 'dddd DD-MM-YYYY';

  constructor() { }

  public checkInputField(form: any, field: string, submitted: boolean) {
    return form.get(field).invalid && (form.get(field).dirty || form.get(field).touched || submitted)
  }

  public formatDate(value) {
    const returnDate = moment(value, 'YYYY-MM-DD').format(this.visualDateFormat)
    if (returnDate === 'Invalid date') {
      return 'Nog te plannen';
    }
    return returnDate;
  }

  public formatDateTime(value) {
    const returnDate = moment(value).format(this.visualDateTimeFormat)
    if (returnDate === 'Invalid date') {
      return 'Ongeldige datum';
    }
    return returnDate;
  }
}
