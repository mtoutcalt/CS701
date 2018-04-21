import { Component, OnInit } from '@angular/core';
import { Deck } from '../model/deck';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.css']
})
export class DeckFormComponent implements OnInit {

  deck = new Deck();
  localDeck: any;
  firstName: string;
  lastName: string;
  userName: string;
  deckName: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.localDeck = JSON.parse(localStorage.getItem('deck'));
    if (this.localDeck) {
      this.deckName = this.localDeck.deckName;
      this.userName = this.localDeck.username;
      this.firstName = this.localDeck.firstname;
      this.lastName = this.localDeck.lastname;
    }
  }

  onSubmit() {

    localStorage.setItem('deck', JSON.stringify(this.deck));

    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    this.router.navigate(['deckbuilder/colors']);
    /////////////////////////////////////////////////////////////////////
    // let deckCount = localStorage.getItem('deckCount');
    // if (deckCount) {
    //   let count: number = +deckCount + 1;
    //   console.log(this.deck);
    //   let name = 'deck' + count;
    //   localStorage.setItem('deckCount', JSON.stringify(count));
    //   localStorage.setItem(name, JSON.stringify(this.deck.deckName));
    // } else {
    //   console.log(this.deck);
    //   localStorage.setItem('deckCount', JSON.stringify(1));
    //   localStorage.setItem('deck1', JSON.stringify(this.deck.deckName));
    // }
  }

  resetDeck() {
    this.localDeck = null;
    localStorage.removeItem('deck');
    localStorage.removeItem('color');
    localStorage.removeItem('creatureDeck');
    localStorage.removeItem('spellDeck');
    this.router.navigate(['deckbuilder/formRenew']);
  }

}
