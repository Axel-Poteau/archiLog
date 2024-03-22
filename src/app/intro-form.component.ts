import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

interface Specialite {
  libelle:string;
  valeur:string;

}

@Component({
  selector: 'app-intro-formulaire',
  template: `
 <div class="container">
   <form [formGroup]="formulaire" (ngSubmit)="onSubmit()">
     <div class="ligne">
       <mat-form-field>
         <input matInput type="text" placeholder="Nom" formControlName="nom">
       </mat-form-field>
       <mat-form-field>
         <input matInput type="text" placeholder="Prénom" formControlName="prenom">
       </mat-form-field>
     </div>
     <div class="ligne">
       <mat-form-field>
         <input matInput type="text" placeholder="Numéro de téléphone" formControlName="numeroTelCtrl">

       </mat-form-field>
       <mat-form-field>
         <mat-label>Spécialité</mat-label>
         <mat-select formControlName="specialite">
           <mat-option *ngFor="let specialite of specialites" [value]="specialite.valeur">
             {{specialite.libelle}}
           </mat-option>
         </mat-select>
       </mat-form-field>
     </div>
     <div class="ligne">
       <button mat-raised-button color="primary" type="submit">Valider</button>
     </div>
   </form>
   <div>
     valeurs : {{formulaire?.value | json}}
   </div>
   <div>
     <mat-error *ngIf="numeroTelCtrl?.errors?.['required'] && (numeroTelCtrl?.dirty || numeroTelCtrl?.touched)">
       Le num est obligatoire
     </mat-error>
     <mat-error *ngIf="numeroTelCtrl?.errors?.['minlength']">
       Le num doit comporter au moins 4 caractères
     </mat-error>
   </div>
   <div>
     <mat-error *ngIf="nom?.errors?.['required'] && (nom?.dirty || nom?.touched)">
       Le nom est obligatoire
     </mat-error>
     <mat-error *ngIf="nom?.errors?.['minlength']">
       Le nom doit comporter au moins 4 caractères
     </mat-error>
   </div>
 </div>
`,
  styles: [
    '.container {height: 80vh; width: 600px; display: flex; flex-direction: column; justify-content: center; margin: 0 auto;}',
    '.ligne {display: flex; flex-direction: row; justify-content: space-around;}'
  ]
})
export class IntroFormulaireComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  get numeroTelCtrl(): AbstractControl | null {
    return this.formulaire.get('numeroTelCtrl');
  }
  specialites: Specialite[] = [
    {valeur: 'polyvalent', libelle: 'Polyvalent'}, {valeur: 'charpentier', libelle: 'Charpentier'},
    {valeur: 'chauffagiste', libelle: 'Chauffagiste'}, {valeur: 'couvreur', libelle: 'Couvreur'},
    {valeur: 'electricien', libelle: 'Electricien'}, {valeur: 'grutier', libelle: 'Grutier'},
    {valeur: 'Macon', libelle: 'Maçon'}, {valeur: 'plaquiste', libelle: 'Plaquiste'},
    {valeur: 'plombier', libelle: 'Plombier'}
  ];


  formulaire = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    prenom: new FormControl(''),
    numeroTelCtrl: new FormControl('',[Validators.required, Validators.minLength(4)]),
    specialite: new FormControl('')
  });

  get nom()
  {
    return this.formulaire.get('nom');
  }



  onSubmit() {
    console.info(this.formulaire.value);
  }

}
