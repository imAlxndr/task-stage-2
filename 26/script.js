const hello = "Привет";
console.log(hello);

const number = new Number(500);
console.dir(number);
console.dir(Number.prototype);
console.dir(Object.getPrototypeOf(Number.prototype));

const string = new String("Пример строки");
console.dir(string);
console.dir(String.prototype);
console.dir(Object.getPrototypeOf(String.prototype));

const boolean = new Boolean(true);
console.dir(boolean);
console.dir(Boolean.prototype);
console.dir(Object.getPrototypeOf(Boolean.prototype));