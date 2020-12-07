import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { IndexComponent } from './composants/index/index.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { ReactiveformComponent } from './composants/reactiveform/reactiveform.component';
import { CalculatriceComponent } from './composants/calculatrice/calculatrice.component';
import { PersonneComponent } from './composants/personne/personne.component';
import { VEHICULE_ROUTES } from './modules/vehicule/vehicule-routing.module';
import { PersonneDetailsComponent } from './composants/personne-details/personne-details.component';
import { PereComponent } from './composants/pere/pere.component';
import { ParentComponent } from './composants/parent/parent.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './composants/auth/auth.component';
import { LeaveGuard } from './guards/leave.guard';
import { ObservableComponent } from './composants/observable/observable.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'adresse', component: AdresseComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'formulaire', component: FormulaireComponent, canDeactivate: [LeaveGuard] },
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'calculatrice', component: CalculatriceComponent },
  { path: 'personnes', component: PersonneComponent },
  { path: 'personnes/:id', component: PersonneDetailsComponent },
  { path: 'vehicule', children: VEHICULE_ROUTES },
  { path: 'pere', component: PereComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
