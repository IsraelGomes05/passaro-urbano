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
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorCategorias(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  getOfertaPorId(param: any): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${param}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0]);
  }

  public getComoUsarOfertaPorId(id: string): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()[0].descricao;
      });
  }

  public getOndeFicaOfertaPorId(id: string): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()[0].descricao;
      });
  }
}
