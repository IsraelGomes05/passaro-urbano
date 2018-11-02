import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service';
import {Oferta} from '../shared/oferta.module';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategorias('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }

}
