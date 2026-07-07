// function getData(data: string | number) {
//   if (typeof data === "string") {
//     return `${data} is string`;
//   }
//   if (typeof data === "number") {
//     return `${data} is number`;
//   }
// }
// // console.log(getData("kdasj"));

// class espresso {
//   brew() {
//     return `breqing from espresso`;
//   }
// }

// class mokaPot {
//   brew() {
//     return `brewing from moka`;
//   }
// }

// function brewCoffee(coffee: espresso | mokaPot) {
//   if (coffee instanceof espresso) {
//     return coffee.brew();
//   }

//   if (coffee instanceof mokaPot) {
//     return coffee.brew();
//   }
// }
// console.log(brewCoffee(new espresso()));

type espresso = { type: "espresso"; sugar: number };
type mocha = { type: "mocha"; sugar: number };
type latte = { type: "latte"; sugar: number };

type coffee = espresso | mocha | latte;

function displayCoffee(order: coffee) {
  if (order.type === "espresso") {
    console.log("coffee is espresso type");
  }
  if (order.type === "mocha") {
    console.log("coffee is mocha type");
  }
  if (order.type === "latte") {
    console.log("coffee is latte type");
  }
}
const myOrder: latte = {
  type: "latte",
  sugar: 24,
};
displayCoffee(myOrder);
