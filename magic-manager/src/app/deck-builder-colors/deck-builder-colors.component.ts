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
        localStorage.setItem('color', "white");

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

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });

    document.getElementById('greenChosen').addEventListener('click',
      function (event) {
        localStorage.setItem('color', "green");

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });

    document.getElementById('redChosen').addEventListener('click',
      function (event) {
        localStorage.setItem('color', "red");

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });

    document.getElementById('blackChosen').addEventListener('click',
      function (event) {
        localStorage.setItem('color', "black");

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });

  }

}
