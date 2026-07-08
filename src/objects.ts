// let cup: {
//   size: "small" | "large";
// };
// cup = {
//   size: "small",
// };

type cup = {
  size: string;
};
let myCup: cup = {
  size: "large",
};
const largecup = {
  size: "large",
  volume: 500,
};
myCup = largecup;

type chai = {
  name: string;
  price: number;
  isHot: boolean;
};

let masalaChai: chai = {
  name: "masala Chai",
  price: 25,
  isHot: true,
};

const updateChai = (chai: chai, updates: Partial<chai>) => {
  chai = { ...chai, ...updates };
  console.log(`updating ${chai.name} with, `, updates);
  return chai;
};

const UpdateChai = (chai: chai, updates: Required<chai>) => {
  chai = { ...chai, ...updates };
  console.log(`updating ${chai.name} with, `, updates);
  return chai;
};
masalaChai = updateChai(masalaChai, { price: 30 });
console.log(masalaChai);
masalaChai = UpdateChai(masalaChai, {
  name: "masalaChai",
  price: 45,
  isHot: true,
});
console.log(masalaChai);
