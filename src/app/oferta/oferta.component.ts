import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {OfertasService} from '../ofertas.service';
import {Oferta} from '../shared/oferta.module';
import {CarrinhoService} from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(
    private router: ActivatedRoute,
    private ofertaService: OfertasService,
    private carrinhoService: CarrinhoService) {
  }

  ngOnInit() {
    this.router.params.subscribe((param: Params) => {
      this.ofertaService.getOfertaPorId(param.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });
    });

    this.carrinhoService.getItens();
  }

  ngOnDestroy(): void {
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
  }
}
