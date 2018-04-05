import { Component, OnInit } from '@angular/core';
import { Cards } from 'mtgsdk-ts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string;
  image:string;
  result:any;

  constructor() { }

  ngOnInit() {
    Cards.find("08618f8d5ebdc0c4d381ad11f0563dfebb21f4ee").then(result => this.image = result.imageUrl);
  }

}
