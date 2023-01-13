class Car {
  private readonly motor = new Motor();

  turnOn(): void {
    this.motor.turnOn();
  }

  turnOff(): void {
    this.motor.turnOff();
  }

  speedUp(): void {
    this.motor.speedUp();
  }

  stop(): void {
    this.motor.stop();
  }
}

class Motor {
  turnOn(): void {
    console.log('Motor is on...');
  }

  turnOff(): void {
    console.log('Motor is off...');
  }

  speedUp(): void {
    console.log('Motor is speeding up..');
  }

  stop(): void {
    console.log('Motor is stopped');
  }
}

const car = new Car();

car.turnOn();
car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();
car.stop();
car.turnOff();
