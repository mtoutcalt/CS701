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
  localColor: string;
  deckName: any;

  constructor(private deckBuilderService: DeckBuilderService) { }

  ngOnInit() {

    this.deckName = JSON.parse(localStorage.getItem('deck'));
    if (this.deckName)  {
      document.getElementById('colorWheel').style.display = 'block';
      document.getElementById('noDeck').style.display = 'none';
    } else {
      document.getElementById('colorWheel').style.display = 'none';
      document.getElementById('noDeck').style.display = 'block';
    }

    document.getElementById('whiteChosen').addEventListener('click',
      function (event) {
        localStorage.setItem('color', "white");

        document.getElementById('chosen').innerHTML = "<h5>WHITE Deck</h5>";

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
  );

    document.getElementById('blueChosen').addEventListener('click',
      function (event) {
        localStorage.setItem('color', "blue");

        document.getElementById('chosen').innerHTML = "<h5>BLUE Deck</h5>";

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });

    document.getElementById('greenChosen').addEventListener('click',
      function (event) {
        localStorage.setItem('color', "green");

        document.getElementById('chosen').innerHTML = "<h5>GREEN Deck</h5>";

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });

    document.getElementById('redChosen').addEventListener('click',
      function (event) {
        localStorage.setItem('color', "red");

        document.getElementById('chosen').innerHTML = "<h5>RED Deck</h5>";

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });

    document.getElementById('blackChosen').addEventListener('click',
      function (event) {
        localStorage.setItem('color', "black");

        document.getElementById('chosen').innerHTML = "<h5>BLACK Deck</h5>";

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });
  }

}
