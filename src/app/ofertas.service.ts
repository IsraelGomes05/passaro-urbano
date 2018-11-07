import {Oferta} from './shared/oferta.module';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {URL_API} from './app.api';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';

@Injectable()
export class OfertasService {


  constructor(private http: Http) {
  }

  public getOfertas(): Promise<Oferta[]> {
    // efetuar requisição
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: Response) => resposta.json());
  }

  public getOfertasPorCategorias(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: Response) => resposta.json());
  }

  getOfertaPorId(param: Response): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${param}`)
      .toPromise()
      .then((resposta: Response) => resposta.json()[0]);
  }

  public getComoUsarOfertaPorId(id: string): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: Response) => {
        return resposta.json()[0].descricao;
      });
  }

  public getOndeFicaOfertaPorId(id: string): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: Response) => {
        return resposta.json()[0].descricao;
      });
  }

  public pesquisaOferta(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
      .pipe(map((resposta: Response) => resposta.json()), retry(10));
  }
}
