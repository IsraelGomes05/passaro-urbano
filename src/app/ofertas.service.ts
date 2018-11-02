import {Oferta} from './shared/oferta.module';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class OfertasService {

  constructor(private http: Http) {
  }

  public getOfertas(): Promise<Oferta[]> {
    // efetuar requisição
    return this.http.get(' http://localhost:3000/ofertas?destaque=true')
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorCategorias(categoria: string): Promise<Oferta[]> {
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  getOfertaPorId(param: any): Promise<Oferta> {
    return this.http.get(`http://localhost:3000/ofertas?id=${param}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0]);
  }
}
