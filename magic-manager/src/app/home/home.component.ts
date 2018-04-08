import { Component, OnInit } from '@angular/core';
import { Cards } from 'mtgsdk-ts';
import { MagicCardService } from '../model/magic-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MagicCardService]
})
export class HomeComponent implements OnInit {

  name:string;
  image:string;
  result:any;

  cards: any;

  constructor(private magicCardService: MagicCardService) { }

  ngOnInit() {
    // Cards.find("08618f8d5ebdc0c4d381ad11f0563dfebb21f4ee").then(result => this.image = result.imageUrl);
    this.cards = this.magicCardService.findCards("Guttural").then(result => this.cards = result);
  }

  search(term: string) {
    this.cards = this.magicCardService.findCards(term).then(result => this.cards = result);
  }




}
