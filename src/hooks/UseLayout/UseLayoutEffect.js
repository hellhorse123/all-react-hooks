import React, { useLayoutEffect, useState } from "react";
import ModalExample from "./ModalExample";

function UseLayoutEffectHook() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>{count}</div>

      <ModalExample />
    </>
  );
}

export default UseLayoutEffectHook;

// Хук useLayoutEffect работает синхронно между тем, когда реакт вычисляет DOM