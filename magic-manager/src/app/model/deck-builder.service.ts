import { Injectable } from '@angular/core';

@Injectable()
export class DeckBuilderService {

  deck: any;

  constructor() {
    // cardService = Cards;
  }

  saveColor(color: string) : void {
      this.deck.add({"color": color});
  }

}
