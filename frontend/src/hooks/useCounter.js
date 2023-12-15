import { useEffect, useState } from "react";

export function useCounter(initialValue) {
  const [contador, setContador] = useState(initialValue);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetear = () => setContador(initialValue);

  useEffect(() => {
    console.log("Contador actualizado");
  }, [contador]);

  return { contador, incrementar, decrementar, resetear };
}