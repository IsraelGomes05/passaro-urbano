import {ItemCarrinho} from './shared/item-carrinho.model';
import {Oferta} from './shared/oferta.module';

export class CarrinhoService {
  public items: ItemCarrinho[] = [];

  public getItens(): ItemCarrinho[] {
    return this.items;
  }

  public incluirItem(oferta: Oferta): void {
    const itemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricaoOferta,
      oferta.valor,
      1
    );
    const itemCarrinhoEncontrado = this.items.find(
      (item: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.items.push(itemCarrinho);
    }
  }

  public totalCarrinhoCompras(): number {
    let total = 0;

    this.items.map((item: ItemCarrinho) => {
      total += item.valor * item.quantidade;
    });

    return total;
  }

  public adicionarQuantidade(item: ItemCarrinho): void {
    const itemCarrinhoEncontrado = this.items.find(
      (itemCarrinho: ItemCarrinho) => item.id === itemCarrinho.id);
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }

  public subtrairQuantidade(item: ItemCarrinho): void {
    const itemCarrinhoEncontrado = this.items.find(
      (itemCarrinho: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1;
      if (itemCarrinhoEncontrado.quantidade === 0) {
        this.items.splice(this.items.indexOf(itemCarrinhoEncontrado, 0), 1);
      }
    }
  }

  public limparCarrinho(): void {
    this.items = [];
  }
}



