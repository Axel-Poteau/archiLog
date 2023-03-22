/** fichier mock-datas.ts */
import {faker} from '@faker-js/faker';
import {Personne} from './personne';

export class Datas {
  private static instance: Datas;
  private static idP = 1;
  private static idD = 1;

  private constructor() {
  }

  public static getInstance(): Datas {
    if (Datas.instance === undefined) {
      Datas.instance = new Datas();
    }
    return Datas.instance;
  }

  public generePersonnes(nb?: number): Personne[] {
    const personnes = [];
    faker.setLocale('fr');
    if (!nb)
      nb = 10;
    for (let i = 0; i < nb; i++) {
      let idPersonne = Datas.idP++;
      const nbDepenses = faker.datatype.number({min: 10, max: 20});
      const tabDep = [];
      for (let j = 0; j < nbDepenses; j++) {
        const dep = {
          nature: faker.helpers.arrayElement(['Alimentaire', 'Loisirs', 'Voiture', 'Habitat', 'Sport', 'Vacances']),
          dd: faker.date.between('2019-01-01', '2019-12-31'),
          libelle: faker.hacker.phrase(),
          montant: +faker.finance.amount(100, 750, 2),
          id: Datas.idD++,
          idPersonne: idPersonne,
        };
        tabDep.push(dep);
      }
      const personne = {
        id: idPersonne,
        nom: faker.name.lastName(),
        prenom: faker.name.firstName(),
        plafond: +faker.finance.amount(5000, 10000, 2),
        depenses: tabDep
      };
      personnes.push(personne);
    }
    return personnes;
  }
}
