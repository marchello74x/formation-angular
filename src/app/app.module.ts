import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './composants/index/index.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './composants/reactiveform/reactiveform.component';
import { CalculatriceComponent } from './composants/calculatrice/calculatrice.component';
import { PersonneComponent } from './composants/personne/personne.component';
import { PersonneService } from './services/personne.service';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { PersonneDetailsComponent } from './composants/personne-details/personne-details.component';
import { PereComponent } from './composants/pere/pere.component';
import { FilsComponent } from './composants/fils/fils.component';
import { TitreComponent } from './composants/titre/titre.component';
import { ChildComponent } from './composants/child/child.component';
import { ParentComponent } from './composants/parent/parent.component';
import { AuthComponent } from './composants/auth/auth.component';
import { ObservableComponent } from './composants/observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    AdresseComponent,
    StagiaireComponent,
    IndexComponent,
    FormulaireComponent,
    ReactiveformComponent,
    CalculatriceComponent,
    PersonneComponent,
    PersonneDetailsComponent,
    PereComponent,
    FilsComponent,
    TitreComponent,
    ChildComponent,
    ParentComponent,
    AuthComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    VehiculeModule
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
