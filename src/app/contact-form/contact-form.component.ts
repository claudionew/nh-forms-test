import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from './country';
import { ContactForm } from './forms';
import { COUNTRY } from './mocks';

@Component({
  selector: 'app-contact-form', // padre-hijo
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  countryList: Country[] = COUNTRY;
  contact: ContactForm;
  contacList: ContactForm[] = [];
  constructor() { }

  ngOnInit(): void {
    this.contact = this.createContactForm(
      "Jose Carlos",
      "Ramirez Tello",
      "jcramirez@gmail.com",
      "male",
      false,
      1,
      "Lima",
      "Calle ABCD Prueba 500",
      "2005"
    )
  }

  createContactForm(firstname: string,
    lastname: string,
    email: string,
    gender: string,
    isMarried: boolean,
    country: number,
    city: string,
    street: string,
    pincode: string): ContactForm {
      return new ContactForm(
        firstname,
        lastname,
        email,
        gender,
        isMarried,
        country,
        city,
        street,
        pincode
      )
  }

  onSubmit(contactForm: NgForm): void {
    const contact: ContactForm = this.createContactForm(
      contactForm.value.firstname,
      contactForm.value.lastname,
      contactForm.value.email,
      contactForm.value.gender,
      contactForm.value.isMarried,
      contactForm.value.country,
      contactForm.value.address.city,
      contactForm.value.address.street,
      contactForm.value.address.pincode
    )
    this.contacList.push(contact);
  }

  resetForm(contactForm: NgForm): void {
    contactForm.resetForm();
  }
}
