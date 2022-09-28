import React, { useState } from "react";
import List from "./List";

function UseDeferredValueHook() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
}

export default UseDeferredValueHook;

// Хук похож на debounce и throttling, однако в нем вы не указываете явно заданное время на отложенность. Если приходит много изменений - хук не будет ничего делать, а будет ждать.
// Хук хорошо подходит в тех случаях, когда мы не можем управлять состоянием самостоятельно: например, когда состояние или данные приходит из внешней библиотеки