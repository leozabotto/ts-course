export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  productsQuantity(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('T-Shirt', 49.26);
const product2 = new Product('Pen', 2.26);

const shoppingCart = new ShoppingCart();

shoppingCart.insertProduct(product1);
shoppingCart.insertProduct(product1);
shoppingCart.insertProduct(product2);

console.log(shoppingCart);
console.log(shoppingCart.totalValue());
