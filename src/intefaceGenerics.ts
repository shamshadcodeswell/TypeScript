interface discount {
  (price: number): number;
}
const discountCalculator: discount = (price) => price * 0.8;

interface teaMachine {
  start(): void;
  stop(): void;
}

const machine: teaMachine = {
  start() {
    console.log("start");
  },
  stop() {},
};

function pair<a, b>(a: a, b: b): [a, b] {
  return [a, b];
}
pair("string", {});

interface bottle<t> {
  name: t;
}
const bottle: bottle<string> = {
  name: "water bottle",
};
