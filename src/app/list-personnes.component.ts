import {Component, Input, OnInit} from '@angular/core';

import {PersonnesService} from "./services/personnes.service";
import {Personne} from "./personne";

@Component({
  selector: 'app-show-personne',
  template: `
    <div class="liste-personnes">
      <button (click)="setTri()">
        <mat-icon>{{icons[sort]}}</mat-icon>
      </button>
      <div class="div-table-personnes">
        <table mat-table [dataSource]="personne">

          <!-- id Column -->
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef> #</th>
            <td mat-cell *matCellDef="let element"> {{element.id}} </td>
          </ng-container>

          <!-- prenom Column -->
          <ng-container matColumnDef="prenom">
            <th mat-header-cell *matHeaderCellDef>Prénom</th>
            <td mat-cell *matCellDef="let element"> {{element.prenom}} </td>
          </ng-container>

          <!-- nom Column -->
          <ng-container matColumnDef="nom">
            <th mat-header-cell *matHeaderCellDef>Nom</th>
            <td mat-cell *matCellDef="let element"> {{element.nom}} </td>
          </ng-container>

          <!-- plafond Column -->
          <ng-container matColumnDef="plafond">
            <th mat-header-cell *matHeaderCellDef>Plafond</th>
            <td mat-cell *matCellDef="let element"> {{element.plafond}} </td>
          </ng-container>

          <!-- détails Column -->
          <ng-container matColumnDef="details">
            <th mat-header-cell *matHeaderCellDef>Action</th>
            <td mat-cell *matCellDef="let element">
              <mat-icon [routerLink]="['/personnes', element.id]">loupe</mat-icon>
            </td>
          </ng-container>

          <!-- La ligne -->
          <tr mat-header-row *matHeaderRowDef="lesColonnes; sticky: true"></tr>
          <tr mat-row *matRowDef="let row; columns: lesColonnes;"></tr>
        </table>
      </div>
    </div>
  `,
  styles: [
    ':host {margin: auto auto}',
    '.liste-personnes {display:flex; flex-direction: column; height:  80vh;  align-items: center}',
    '.div-table-personnes {height:  70vh; overflow-y: scroll;}',
    '.mat-table {width: 700px; }',
  ]
})

export class ListPersonnesComponent implements OnInit {

  panelOpenState: boolean = false;

  lesColonnes = ['id', 'nom', 'prenom', 'plafond','details'];
  icons: string[] = ['arrow_forward', 'arrow_downward', 'arrow_upward'];
  sort: number = 0;

  personne: Personne [] = [];


  constructor(public personnesService: PersonnesService) {
  }

  ngOnInit(): void {
    this.personne = this.personnesService.getPersonnes();
  }



  setTri() {
    this.sort = (this.sort + 1) % 3;
    this.personne = this.personnesService.getPersonnes(this.sort)
    console.log(this.personne);
  }




}
