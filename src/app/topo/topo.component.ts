import {Component, OnInit} from '@angular/core';
import {OfertasService} from '../ofertas.service';
import {Observable, Subject, of} from 'rxjs';
import {Oferta} from '../shared/oferta.module';
import {debounceTime, switchMap, distinctUntilChanged, catchError} from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subject: Subject<string> = new Subject<string>();

  constructor(private ofertaService: OfertasService) {
  }

  ngOnInit() {
    this.ofertas = this.subject.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        if (termo.trim() === '') {
          return of<Oferta[]>([]);
        }
        return this.ofertaService.pesquisaOferta(termo);
      }),
      catchError((erro) => {
        console.log(erro);
        return of([]);
      })
    );
  }

  pesquisa(termoDaBusca: string): void {
    this.subject.next(termoDaBusca);
  }

  limpaPesquisa(): void {
    this.subject.next('');
  }
}
