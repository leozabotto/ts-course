type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, curr) => total + curr.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com o total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    this._items.length = 0;
  }

  isEmpty(): boolean {
    console.log('O carrinho foi limpo...');
    return this._items.length === 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'The Sims 4', price: 199.9 });
shoppingCart.addItem({ name: 'The Sims 5', price: 239.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
