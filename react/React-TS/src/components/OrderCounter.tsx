import { useState } from "react";

export const OrderCounter = () => {
  const [orders, setOrder] = useState<number>(0);
  return (
    <div>
      <h3>Total orders : {orders}</h3>
      <button onClick={() => setOrder((orders) => orders + 1)}>
        place order
      </button>
    </div>
  );
};
