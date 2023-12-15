import { useEffect, useState } from "react";

export const Efectos = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    setCounter(counter2 + 1);
  }, [counter2]);

  useEffect(() => {
    console.log("sin dependencia");
  }, []);

  return (
    <div>
      <section>
        clicks: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </section>
      <section>
        clicks: {counter2}
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
      </section>
    </div>
  );
};