import { Component } from '@angular/core';
import { Datas } from './mock-datas';
import {Personne} from "./personne";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-depense';
  data = Datas.getInstance();
  personne:Personne[];

  constructor() {
    this.personne = this.data.generePersonnes(10);

  }


}
