import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

import { DeckBuilderService } from './model/deck-builder.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { RouterModule, Routes } from '@angular/router';
import { DeckBuilderColorsComponent } from './deck-builder-colors/deck-builder-colors.component';
import { DeckBuilderCreaturesComponent } from './deck-builder-creatures/deck-builder-creatures.component';
import { MagicTutorialComponent } from './magic-tutorial/magic-tutorial.component';
import { MagicPhasesComponent } from './magic-phases/magic-phases.component';
import { DeckBuilderSpellsComponent } from './deck-builder-spells/deck-builder-spells.component';
import { DeckBuilderCurrentComponent } from './deck-builder-current/deck-builder-current.component';
import { FindstoreComponent } from './findstore/findstore.component';
import { MagicFormatsComponent } from './magic-formats/magic-formats.component';


const appRoutes: Routes = [
  { path: 'userform', component: UserFormComponent},
  { path: 'deckbuilder', component: DeckBuilderComponent,
      children: [
        { path: '', component: DeckBuilderColorsComponent},
        { path: 'creatures', component: DeckBuilderCreaturesComponent},
        { path: 'spells', component: DeckBuilderSpellsComponent},
        { path: 'currentDeck', component: DeckBuilderCurrentComponent}
      ]},
  { path: 'magic', component: HomeComponent, data: {title: 'MAGIC!'} },
  { path: 'tutorial', component: MagicTutorialComponent },
  { path: 'phases', component: MagicPhasesComponent },
  { path: 'formats', component: MagicFormatsComponent },
  { path: 'findstore', component: FindstoreComponent },
  { path: '', redirectTo: '/magic', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserFormComponent,
    DeckBuilderComponent,
    DeckBuilderColorsComponent,
    DeckBuilderCreaturesComponent,
    MagicTutorialComponent,
    MagicPhasesComponent,
    DeckBuilderSpellsComponent,
    DeckBuilderCurrentComponent,
    FindstoreComponent,
    MagicFormatsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatStepperModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [DeckBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
