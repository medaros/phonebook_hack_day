import { Component, OnInit } from '@angular/core';
import { PhonebookService } from './services/phonebook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'phonebook';
  contacts: Object;
  search;
  
  constructor(private phonebook: PhonebookService) {}

  ngOnInit() {
    this.phonebook.getPhoneNumbers().subscribe(res => {
      // if there is data
      if(res.contacts)
        this.contacts = res.contacts

      console.log(this.contacts)
    })
  }
}
