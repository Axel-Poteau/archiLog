import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonnesService} from "./services/personnes.service";
import {Personne} from "./personne";
import {Depense} from "./depense";

@Component({
  selector: 'app-datails-personne',
  template: `
      <div class="details-container">
          <div class="identite">
              <span>{{personne.prenom}}</span> <span>{{personne.nom}}</span>
              <span>{{personne.plafond| number}}</span>
              <span [class.red]="isOver()">{{montant| number}}</span>
          </div>
          <div class="table-depenses">
              <div class="commande">
                  <button (click)="setTri()">
                      <mat-icon>{{icons[critere]}}</mat-icon>
                  </button>
                  <mat-form-field appearance="fill">
                      <mat-label>Filtre</mat-label>
                      <select matNativeControl (change)="filtreDepenses(filtre.value)" #filtre>
                          <option value="all">-- Toutes les catégories --</option>
                          <option *ngFor="let val of filtres" value={{val}}>{{val}}</option>
                      </select>
                  </mat-form-field>
              </div>
              <table mat-table [dataSource]="depenses">
                  <!-- nature Column -->
                  <ng-container matColumnDef="nature">
                      <th mat-header-cell *matHeaderCellDef>Nature</th>
                      <td mat-cell *matCellDef="let element"> {{element.nature}} </td>
                  </ng-container>

                  <!-- dd Column -->
                  <ng-container matColumnDef="dd">
                      <th mat-header-cell *matHeaderCellDef>Date</th>
                      <td mat-cell *matCellDef="let element"> {{element.dd| date:'dd-MM-YYYY'}} </td>
                  </ng-container>

                  <!-- libelle Column -->
                  <ng-container matColumnDef="libelle">
                      <th mat-header-cell *matHeaderCellDef>Libellé</th>
                      <td mat-cell *matCellDef="let element"> {{element.libelle}} </td>
                  </ng-container>

                  <!-- montant Column -->
                  <ng-container matColumnDef="montant">
                      <th mat-header-cell *matHeaderCellDef>Montant</th>
                      <td mat-cell *matCellDef="let element"> {{element.montant}} </td>
                  </ng-container>

                  <!-- La ligne -->
                  <tr mat-header-row *matHeaderRowDef="lesColonnes; sticky: true"></tr>
                  <tr mat-row *matRowDef="let row; columns: lesColonnes;"></tr>
              </table>

          </div>
      </div>
  `,
  styles: [
    '.details-container{display: flex; flex-direction: column; height: 70vh; width: 80vw; margin: 1rem auto}',
    '.identite{display: flex; flex-direction: row; justify-content: space-between; font-size: xxx-large; margin-bottom: 1rem}',
    '.red{color: red}', '.mat-cell{padding: 1rem 1rem}',
    '.table-depenses{height:  60vh; overflow-y: scroll;display: flex; flex-direction: column; align-items: center;}',
    '.commande {display: flex; flex-direction: row; width: 400px; gap: 10px; align-items: center; justify-content: space-around}'
  ]
})
export class DatailsPersonneComponent implements OnInit {
  personne: Personne = <Personne>{};
  depenses: Depense[] = [];
  lesColonnes: string[] = ['nature', 'dd', 'libelle', 'montant'];
  icons: string[] = ['timer', 'euro', 'nature_people'];
  critere: number = 0;
  filtres: string[] = ['Alimentaire', 'Loisirs', 'Voiture', 'Habitat', 'Sport', 'Vacances'];

  constructor(private route: ActivatedRoute, private personnesService: PersonnesService) {
  }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.personne = this.personnesService.getPersonne(id);
    this.depenses = this.personne.depenses;
  }

  get montant(): number {
    return this.personnesService.totalDepenses(this.personne);
  }

  isOver(): boolean {
    return this.personne.plafond < this.montant;
  }

  setTri() {
    this.critere = (this.critere + 1) % 3;
    if (this.critere == 0) {
      this.depenses = [...this.depenses].sort((x: Depense, y: Depense) => {
        if (x.dd < y.dd)
          return -1
        else
          return 1
      });
    } else if (this.critere == 1) {
      this.depenses = [...this.depenses].sort((x: Depense, y: Depense) => x.montant - y.montant);
    } else {
      this.depenses = [...this.depenses].sort((x: Depense, y: Depense) => {
        if (x.nature < y.nature)
          return -1
        else if (x.nature == y.nature) {
          return x.montant - y.montant
        }
        return 1
      });
    }
  }

  filtreDepenses(nature: string) {
    if (nature !== 'all')
      this.depenses = this.personne.depenses.filter((x: Depense) => x.nature === nature);
    else
      this.depenses = this.personne.depenses;
  }
}
