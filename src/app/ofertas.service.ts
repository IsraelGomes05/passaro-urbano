import {Oferta} from './shared/oferta.module';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {URL_API} from './app.api';

@Injectable()
export class OfertasService {


  constructor(private http: Http) {
  }

  public getOfertas(): Promise<Oferta[]> {
    // efetuar requisição
    return this.http.get(`${URL_API}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorCategorias(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  getOfertaPorId(param: any): Promise<Oferta> {
    return this.http.get(`${URL_API}?id=${param}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0]);
  }
}
