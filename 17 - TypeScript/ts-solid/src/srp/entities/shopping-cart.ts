import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, curr) => total + curr.price, 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    console.log('O carrinho foi limpo...');
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
