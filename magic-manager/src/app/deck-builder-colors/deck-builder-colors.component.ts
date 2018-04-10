import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-builder-colors',
  templateUrl: './deck-builder-colors.component.html',
  styleUrls: ['./deck-builder-colors.component.css']
})
export class DeckBuilderColorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('whiteChosen').addEventListener('click',
      function (event) {
        alert("WHITE");
    });

    document.getElementById('blueChosen').addEventListener('click',
      function (event) {
        alert("BLUE");
    });

    document.getElementById('greenChosen').addEventListener('click',
      function (event) {
        alert("GREEN");
    });

    document.getElementById('redChosen').addEventListener('click',
      function (event) {
        alert("RED");
    });

    document.getElementById('blackChosen').addEventListener('click',
      function (event) {
        alert("BLACK");
    });

  }

}
