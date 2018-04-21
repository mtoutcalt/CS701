import { Component, OnInit } from '@angular/core';
import { Deck } from '../model/deck';

@Component({
  selector: 'app-user-form',
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.css']
})
export class DeckFormComponent implements OnInit {

  deck = new Deck();

  constructor() { }

  ngOnInit() {


  }

  onSubmit() {

    let deckCount = localStorage.getItem('deckCount');
    if (deckCount) {
      let count: number = +deckCount + 1;
      console.log(this.deck);
      let name = 'deck' + count;
      localStorage.setItem('deckCount', JSON.stringify(count));
      localStorage.setItem(name, JSON.stringify(this.deck.deckName));
    } else {
      console.log(this.deck);
      localStorage.setItem('deckCount', JSON.stringify(1));
      localStorage.setItem('deck1', JSON.stringify(this.deck.deckName));
    }



  }

}
