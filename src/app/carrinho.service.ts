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

    this.items.push(itemCarrinho);
  }
}



