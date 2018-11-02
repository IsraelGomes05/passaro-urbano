import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../ofertas.service';
import {Oferta} from '../shared/oferta.module';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private router: ActivatedRoute,
    private ofertaService: OfertasService) {
  }

  ngOnInit() {
    this.ofertaService.getOfertaPorId(this.router.snapshot.params['id'])
      .then((oferta: Oferta) => {
          this.oferta = oferta;
      });
  }

}
