import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}
export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("");
  const [cups, setCups] = useState<number>(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name: name, cups: cups });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>chai Name</label>
      <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <input
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value))
        }
      />
      <button type="submit">submit</button>
    </form>
  );
}
