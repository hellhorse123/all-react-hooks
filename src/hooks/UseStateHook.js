import React, { useState } from "react";

function UseStateHook() {
  //   const [count, setCount] = useState(4);
  const [count, setCount] = useState(() => 4); // позволяет отрисовать сосояние только 1 раз при ререндере. Потом это состояние сохраняется. Подходит для сложных значений, которые занимает время для их вычисления.

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default UseStateHook;


/*
   // Код при использовании объекта с хуком useState

  const [state, setState] = useState({count: 4, theme: 'blue'}); 
    const count = state.count
    const theme = state.theme

    function decrementCount() {
        setState(prevState => {
           return { ...prevState, count: prevState.count - 1 }
        })
    }

// ...prevState необходимо для того, что объект должен обновлятся со всеми значениями, без этого будет ошибка
*/