import { Injectable } from '@angular/core';
import { Cards, Card, Sets } from 'mtgsdk-ts';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MagicCardService {

  cards: any;
  card: any;

  constructor() {
    // cardService = Cards;
  }

  findCardById(id: string) : Promise<any> {
      return Cards.find(id)
        .then( result =>
          {
            console.log(result);
            this.card = result;
            return this.card;
          });
  }

  findCards(searchTerm: string) : Promise<any> {
      return Cards.where({name: searchTerm})
        .then( results =>
          {
            console.log(results);
            this.cards = results;
            return this.cards;
          });
  }

  findCreatureCardsByColor(colorInput: string) : Promise<any> {
      return Cards.where({colors: colorInput, types: 'Creature' })
        .then( results =>
          {
            console.log(results);
            this.cards = results;
            return this.cards;
          });
  }

  findSpellCardsByColor(colorInput: string) : Promise<any> {
      return Cards.where({colors: colorInput, types: 'Sorcery' })
        .then( results =>
          {
            //TODO subscribe
            console.log(results);
            this.cards = results;
            return this.cards;
          });
  }

  findSets(setID: string): Promise<Card[]> {
    return Sets.generateBooster(setID)
      .then(result => {
	       for (const card of result) console.log(card.name);
         return result;
     });
  }

  findSetName(setID: string): Promise<string> {
    return Sets.find(setID)
      .then(result => {
          return result.name;
      });
  }

}
