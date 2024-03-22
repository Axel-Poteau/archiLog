import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-val-email',
  templateUrl: './form-val-email.component.html',
  styleUrls: ['./form-val-email.component.css']
})
export class FormValEmailComponent implements OnInit {
  formulaire = new FormGroup({
    email: new FormControl('',
      [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
  });

  constructor() {
  }

  get email(): AbstractControl | null {
    return this.formulaire.get('email');
  }


  ngOnInit(): void {
  }

}
