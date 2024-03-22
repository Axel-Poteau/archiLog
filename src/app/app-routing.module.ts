import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListPersonnesComponent} from './list-personnes.component';
import {DashboardComponent} from './dashboard.component';
import {PageNotFoundComponent} from "./page-not-found.component";
import {DatailsPersonneComponent} from "./datails-personne.component";
import {InroObservableComponent} from "./inro-observable.component";
import {IntroFormulaireComponent} from "./intro-form.component";
import {FormValEmailComponent} from "./form-val-email/form-val-email.component";
import {EditDepenseComponent} from "./edit-depense/edit-depense.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'personnes', component: ListPersonnesComponent},
  {path: 'personnes/:id', component: DatailsPersonneComponent},
  {path: 'intro-observable', component: InroObservableComponent},
  {path: 'intro-form', component: IntroFormulaireComponent},
  {path: 'form-mail', component: FormValEmailComponent},
  {path: 'edit-depense', component: EditDepenseComponent},
  {path: '**', component: PageNotFoundComponent}

,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
