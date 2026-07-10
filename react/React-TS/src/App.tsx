import "./App.css";
import { Chaicard } from "./components/Chaicard";
import { OrderCounter } from "./components/OrderCounter";
import type { chai } from "./types";
import { ChaiList, type ChaiListProps } from "./components/Chailist";
import { OrderForm } from "./components/OrderForm";
import { Card } from "./components/Card";

const menu: chai[] = [
  {
    id: 1,
    name: "masla",
    price: 35,
  },
  {
    id: 2,
    name: "maslaa chai",
    price: 30,
  },
  {
    id: 3,
    name: "adrak chai",
    price: 25,
  },
  {
    id: 4,
    name: "cutting chai",
    price: 40,
  },
];

function App() {
  return (
    <>
      <div>
        <h1>Vite+React</h1>
        <ChaiList items={menu}></ChaiList>
        <OrderCounter></OrderCounter>
        <OrderForm
          onSubmit={(order) => {
            console.log("placed :", order.name, order.cups);
          }}
        ></OrderForm>
      </div>
      <Card title="hitesh" footer={<button>hitesh</button>}>
        <h3>dsa</h3>
      </Card>
    </>
  );
}

export default App;
