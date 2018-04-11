import { Component, OnInit } from '@angular/core';
import { Cards } from 'mtgsdk-ts';
import { MagicCardService } from '../model/magic-card.service';

@Component({
  selector: 'app-deck-builder-current',
  templateUrl: './deck-builder-current.component.html',
  styleUrls: ['./deck-builder-current.component.css'],
  providers: [MagicCardService]
})
export class DeckBuilderCurrentComponent implements OnInit {

  creatureCards: any;
  spellCards: any;
  card: any;

  constructor(private magicCardService: MagicCardService) { }

  ngOnInit() {
    let localCreaturesIds = JSON.parse(localStorage.getItem('creatureDeck'));

    if (localCreaturesIds) {
      this.creatureCards = [];
      for (let i = 0; i < localCreaturesIds.length; i++) {
        this.card = this.magicCardService.findCardById(localCreaturesIds[i]).then(result => this.creatureCards.push(result)));
      }
    }

    let localSpellIds = JSON.parse(localStorage.getItem('spellDeck'));

    if (localSpellIds) {
      this.spellCards = [];
      for (let i = 0; i < localSpellIds.length; i++) {
        this.card = this.magicCardService.findCardById(localSpellIds[i]).then(result => this.spellCards.push(result)));
      }
    }
  }

}
