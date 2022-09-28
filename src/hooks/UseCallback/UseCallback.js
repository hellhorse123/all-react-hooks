import React, { useCallback, useState } from "react";
import List from "./List";

function UseCallbackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallbackHook;

// похож на useMemo. В данном примере хук useCallback воссоздает нашу функцию получения элементов при изменении числа. При изменении темы - не триггерится
// главное различие use Callback и useMemo - useMemo принимает  функцию и возвращает вам возвращенное значение этой функции. useCallback же принимает функцию  и возвращает фактическую функцию (не значение)