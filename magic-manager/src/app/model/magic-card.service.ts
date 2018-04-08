import { Injectable } from '@angular/core';
import { Cards, Card } from 'mtgsdk-ts';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MagicCardService {

  cards: any;

  constructor() {
    // cardService = Cards;
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

}
