import { Component, OnInit } from '@angular/core';
import { Cards } from 'mtgsdk-ts';
import { MagicCardService } from '../model/magic-card.service';

@Component({
  selector: 'app-deck-builder-spells',
  templateUrl: './deck-builder-spells.component.html',
  styleUrls: ['./deck-builder-spells.component.css'],
  providers: [MagicCardService]
})
export class DeckBuilderSpellsComponent implements OnInit {

  storedColor: string;
  spellCards: any;

  constructor(private magicCardService: MagicCardService) { }

  ngOnInit() {

    let color = localStorage.getItem("color");
    console.log(color);
    if (color) {
      this.storedColor = color;
      console.log(this.storedColor);
      this.spellCards = this.magicCardService.findSpellCardsByColor(this.storedColor).then(result => this.spellCards = result);
    }

  }

  cardChosen(card: any) {
    let spellDeck: Array<string>;
    let localSpells = JSON.parse(localStorage.getItem('spellDeck'));
    if (localSpells == null) {
      spellDeck = [];
    } else {
      spellDeck = localSpells;
    }
    spellDeck.push(card.id);
    localStorage.setItem('spellDeck', JSON.stringify(spellDeck));
  }

}