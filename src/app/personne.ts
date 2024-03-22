import {Depense} from './depense';

export interface Personne {
  id: number;
  nom: string;
  prenom: string;
  plafond: number;
  depenses: Depense[];



}
