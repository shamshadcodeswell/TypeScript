const chaiFlavours: string[] = ["masala", "adrak"];
const chaiPrice: Array<number> = [12, 34, 54, 65];

type chai = {
  name: string;
  price: number;
};

const menu: chai[] = [{ name: "masla", price: 23 }];

const menu2: readonly chai[] = [{ name: "masla", price: 23 }];

const table: number[][] = [[12, 3], [123]];

let chaiTuple: [string, number];
chaiTuple = ["masala", 20];
chaiTuple = ["adrak", 23];

chaiTuple.push(29);
console.log(chaiTuple);

type test = string | number[];
const testArr = ["hii", 23, 412];

type namedTuples = [name: string, price: number];
const tupleOne: namedTuples = ["shams", 200];

enum seatSize {
  "LARGE",
  "MEDIUM",
  "SMALL",
}

const seatA4 = seatSize.MEDIUM;

enum CHAIPRICE {
  LARGE = 25,
  SMALL = 15,
  MEDIUM = 20,
}

const masalaSmall = CHAIPRICE.SMALL;
