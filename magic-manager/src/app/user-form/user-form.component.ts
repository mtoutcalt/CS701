import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.user));
  }

}
