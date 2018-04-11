import { Component, OnInit } from '@angular/core';
import { DeckBuilderService } from '../model/deck-builder.service';

@Component({
  selector: 'app-deck-builder-colors',
  templateUrl: './deck-builder-colors.component.html',
  styleUrls: ['./deck-builder-colors.component.css'],
  providers: [DeckBuilderService]
})
export class DeckBuilderColorsComponent implements OnInit {

  color: string;

  constructor(private deckBuilderService: DeckBuilderService) { }

  ngOnInit() {

    document.getElementById('whiteChosen').addEventListener('click',
      function (event) {
        alert("WHITE");
        localStorage.setItem('color', "white");
      }
  );

    document.getElementById('blueChosen').addEventListener('click',
      function (event) {
        alert("BLUE");
        localStorage.setItem('color', "blue");
    });

    document.getElementById('greenChosen').addEventListener('click',
      function (event) {
        alert("GREEN");
        localStorage.setItem('color', "green");
    });

    document.getElementById('redChosen').addEventListener('click',
      function (event) {
        alert("RED");
        localStorage.setItem('color', "red");
    });

    document.getElementById('blackChosen').addEventListener('click',
      function (event) {
        alert("BLACK");
        localStorage.setItem('color', "black");
    });

  }

}
