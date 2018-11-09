import {Component, OnInit} from '@angular/core';
import {OrdemCompraService} from '../ordem-compra.service';
import {Pedido} from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idCompra: number;
  public pedido = new Pedido('', '', '', '');
  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaPagamento = '';
  public enderecoValido = false;
  public numeroValido = false;
  public complementoValido = false;
  public formaPagamentoValido = false;

  public enderecoEstadoPrimitivo = true;
  public numeroEstadoPrimitivo = true;
  public complementoEstadoPrimitivo = true;
  public formaPagEstadoPrimitivo = true;
  public formEstado = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) {
  }

  ngOnInit() {
  }

  atualizaEndereco(value: string) {
    this.endereco = value;
    this.enderecoEstadoPrimitivo = false;
    this.enderecoValido = this.endereco.length > 3;
    this.habilita();
  }

  atualizaNumero(value: string) {
    this.numeroEstadoPrimitivo = false;
    this.numero = value;
    this.numeroValido = this.numero.length > 0;
    this.habilita();
  }

  atualizaComplemento(value: string) {
    this.complementoEstadoPrimitivo = false;
    this.complemento = value;
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
    this.habilita();
  }

  atualizaPag(value: string) {
    this.formaPagEstadoPrimitivo = false;
    this.formaPagamento = value;
    this.formaPagamentoValido = this.formaPagamento.length > 3;
    this.habilita();
  }

  public habilita(): void {
    if (this.enderecoValido === true &&
      this.numeroValido === true &&
      this.formaPagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  confirmarCompra() {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.formaPagamento = this.formaPagamento;
    this.pedido.complemento = this.complemento;

    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((rs: number) => {
        this.idCompra = rs;
      });
  }
}
