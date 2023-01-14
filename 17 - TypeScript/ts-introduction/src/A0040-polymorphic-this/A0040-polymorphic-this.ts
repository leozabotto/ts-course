class Calculator {
  constructor(public num: number) {}

  add(n: number): this {
    this.num += n;
    return this;
  }

  sub(n: number): this {
    this.num -= n;
    return this;
  }

  div(n: number): this {
    this.num /= n;
    return this;
  }

  mult(n: number): this {
    this.num *= n;
    return this;
  }
}

class SubCalculator extends Calculator {
  pow(n: number): this {
    this.num **= n;
    return this;
  }
}

const calculator = new SubCalculator(10);
calculator.add(5).mult(2).div(2).sub(5).pow(2);
console.log(calculator);

// Builder - GoF
class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Sending data via ${this.method} to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('https://www.google.com');
request.setMethod('post').send();

export {};
