import ts = require("typescript");

type coffee = {
  amount: number;
  water: number;
  bitterness: "high" | "low";
};

class espresso implements coffee {
  amount = 12;
  water = 24;
  bitterness: "high" | "low" = "high" as const;
}

interface chai {
  sugar: "high" | "low";
}

class masalaChai implements chai {
  sugar: "high" | "low" = "high";
}

interface response {
  ok: boolean;
}
class myRes implements response {
  ok = true;
}

type drinks = {
  water: number;
  sugar?: boolean;
};
type wine = {
  alcohol: number;
};
const redWine: drinks = {
  water: 20,
};

type app = {
  readonly name: string;
  version: number;
};

const myApp: app = {
  name: "whatsapp",
  version: 1.2,
};
myApp.version = 1.3; // allowed
// myApp.name = "insta"; // not allowed
