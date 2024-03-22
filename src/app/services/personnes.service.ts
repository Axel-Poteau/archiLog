import { Injectable } from '@angular/core';
import {Datas} from "../mock-datas";
import {Personne} from "../personne";

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
  data = Datas.getInstance();
  personne: Personne[];

  constructor() {
    this.personne = this.data.generePersonnes(10)
  }

  getPersonnes(sort?: number) {
    let sortedPersonne: Personne[] = [...this.personne]
    if (sort == 0) {
      sortedPersonne = this.personne.sort((n1, n2) => {
        if (n1.id > n2.id) {
          return 1;
        }
        if (n1.id < n2.id) {
          return -1;
        }
        return 0;
      });
    }
    else if (sort == 1) {
      sortedPersonne = this.personne.sort((n1, n2) => {
        if (n1.nom > n2.nom) {
          return 1;
        }
        if (n1.nom < n2.nom) {
          return -1;
        }
        return 0;
      });

    }
    else if (sort == 2) {
      sortedPersonne = this.personne.sort((n1, n2) => {
        if (n1.nom > n2.nom) {
          return -1;
        }
        if (n1.nom < n2.nom) {
          return 1;
        }
        return 0;
      });

    }
    return this.personne;


  }
  getPersonne(id: number):Personne {
    return this.personne.find((p: { id: number; }) => p.id === id) || <Personne>{};
  }
  totalDepenses(personne:Personne): number{
    let total:number = 0
    let dep = personne.depenses;
    for(let x of dep){
      total+=x.montant}
    return total;
    }
  }
