import { Component } from '@angular/core';
import { Datas } from './mock-datas';
import {Personne} from "./personne";
import {MessagesService} from "./message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-depense';
  data = Datas.getInstance();
  personne:Personne[];



  constructor(private messageService: MessagesService) {
    this.personne = this.data.generePersonnes(10);
    this.messageService.add('test test')
  }
  noMessage(): boolean{
    console.log(this.messageService.isEmpty())
    return this.messageService.isEmpty();
  }

}
