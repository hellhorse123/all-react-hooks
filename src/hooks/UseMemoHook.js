import React, { useMemo, useState, useEffect } from "react";

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i <= 10000000; i++) {}
  return num * 2;
}

function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "darkBlue" : "white",
      color: dark ? "#fff" : "#252525",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, themeStyles); // блягодаря этому useEffect,  мы демонстрируем важность useMemo в значении темы, так как без useMemo консоль вызывалась бы каждый раз, даже при неизменности темы (передавалась бы другая ссылка).

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

export default UseMemoHook;
