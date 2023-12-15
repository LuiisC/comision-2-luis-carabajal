import { useCounter } from "../hooks/useCounter"

export const Counter = () => {
    let initialValue = 0;
  
    const { contador, incrementar, decrementar, resetear } =
      useCounter(initialValue);
  
    const {
      contador: contador2,
      incrementar: inc2,
      decrementar: dec2,
      resetear: res2,
    } = useCounter(initialValue);
  
    return (
      <div>
        <p>Contador: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={resetear}>Resetear</button>
        <p>Contador2: {contador2}</p>
        <button onClick={inc2}>Incrementar</button>
        <button onClick={dec2}>Decrementar</button>
        <button onClick={res2}>Resetear</button>
  
        <p>suma: {contador + contador2}</p>
      </div>
    );
  };