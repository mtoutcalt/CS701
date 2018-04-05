import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {

   isLinear = true;
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
   red:string;
   blue:string;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      red: ['', Validators.required],
      blue: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
