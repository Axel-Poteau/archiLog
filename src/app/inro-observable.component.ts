import {Component, OnInit} from '@angular/core';
import {filter, map, Observable, Observer, range} from "rxjs";

@Component({
  selector: 'app-inro-observable',
  template: `
    <p>
      inro-observable works!
    </p>
  `,
  styles: [
  ]
})
export class InroObservableComponent implements OnInit{

  sourisVerte(): Observable<string>{
    const parole = ["Une souris verte","Qui courait dans l’herbe.","Je l’attrape par la queue,","Je la montre à ces messieurs.","Ces messieurs me disent :","Trempez là dans l’huile,","Trempez là dans l’eau,","Ça fera un escargot tout chaud.","Je la mets dans mon chapeau","Elle me dit qu’il fait trop chaud.","Je la mets dans un tiroir","Elle me dit qu’il fait trop noir.","Je la mets dans ma culotte","Elle me fait trois petites crottes."];
    const sourisVerte$ = new Observable((observer: Observer<string>)=>{
      parole.forEach(ligne => {
        let r = Math.random();
        if (r<0.15){
          observer.error('bug bug')
        }
        observer.next(ligne)
      });
      observer.complete();

    });
    return sourisVerte$;
  }
  rangeValeurs(lb: number, hb: number): Observable<number>{
    return range(lb,hb-lb+1);
  }





    ngOnInit() :void{
      this.sourisVerte().subscribe({
        next(elt:String){console.log(elt)},
        error(err){console.log(err)},
        complete(){console.log('fin du flux')}
      })

      this.rangeValeurs(10,20).subscribe(console.log)
      console.log("pair")
      this.rangeValeurs(10,20).pipe(filter(x=>x%2==0)).subscribe(console.log)
      console.log("impair")
      this.rangeValeurs(10,20).pipe(filter(x=>x%2==1),map(x=>x*2+1)).subscribe(console.log)

      }
  }


