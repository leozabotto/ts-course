export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 50;

  calculate(value: number): number {
    return value - value * (this.discount / 100);
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 10;

  calculate(value: number): number {
    return value - value * (this.discount / 100);
  }
}

export class NoDiscount extends Discount {
  calculate(value: number): number {
    return value;
  }
}
