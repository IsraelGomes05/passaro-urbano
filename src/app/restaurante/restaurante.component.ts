import {Component, OnInit} from '@angular/core';
import {Oferta} from '../shared/oferta.module';
import {OfertasService} from '../ofertas.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [OfertasService]
})
export class RestauranteComponent implements OnInit {

  public ofertas: Array<Oferta>;

  constructor(private ofertaService: OfertasService) {
  }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategorias('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }

}
