interface cardType {
  name: string;
  price: number;
  isSpecial: boolean;
}
export const Chaicard = ({ name, price, isSpecial = false }: cardType) => {
  return (
    <div>
      <h2>
        {name} {isSpecial && <span>***</span>}
      </h2>
      <p>{price}</p>
    </div>
  );
};
