type MyType = number;

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];

async function promiseAsync() {
  return 1;
}

promiseAsync().then((result) => console.log(result + 1));

function myPromise(): Promise<MyType | number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

myPromise().then((result) => console.log(result + 1));

export {};
