import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) { }

  getPhoneNumbers() {
    return this.http.get<any>("http://www.mocky.io/v2/581335f71000004204abaf83")
  }
}
