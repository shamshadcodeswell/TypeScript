import type { chai } from "../types";
import { Chaicard } from "./Chaicard";
export interface ChaiListProps {
  items: chai[];
}
export const ChaiList = ({ items }: ChaiListProps) => {
  return (
    <>
      <div>
        {items.map((chai) => (
          <Chaicard
            key={chai.id}
            name={chai.name}
            price={chai.price}
            isSpecial={chai.price > 30}
          ></Chaicard>
        ))}
      </div>
    </>
  );
};
