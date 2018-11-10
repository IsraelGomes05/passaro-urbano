import {Component, OnInit, ViewChild} from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import {NgForm} from '@angular/forms';
import {Pedido} from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;
  public idPedido: number = undefined;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  public confirmarCompra(): void {
    const pedido: Pedido = new Pedido(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPag);
    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedido = idPedido;
      });
  }
}
