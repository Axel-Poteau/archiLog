import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MessagesService} from './message.service';
import { ShowMessagesComponent } from './show-messages.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { ListPersonnesComponent } from './list-personnes.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DatailsPersonneComponent } from './datails-personne.component';
import {MatTableModule} from "@angular/material/table";
import { InroObservableComponent } from './inro-observable.component';
import { IntroFormulaireComponent } from './intro-form.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { FormValEmailComponent } from './form-val-email/form-val-email.component';
import { EditDepenseComponent } from './edit-depense/edit-depense.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowMessagesComponent,
    ListPersonnesComponent,
    DashboardComponent,
    PageNotFoundComponent,
    DatailsPersonneComponent,
    InroObservableComponent,
    IntroFormulaireComponent,
    FormValEmailComponent,
    EditDepenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
