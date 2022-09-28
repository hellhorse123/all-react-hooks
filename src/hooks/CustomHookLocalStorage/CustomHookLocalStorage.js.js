import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function CustomHookLocalStorage() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default CustomHookLocalStorage;

//useLocalStorage для сохранения значения инпута после перезагрузки
//useUpdateLogger подписывается на изменение состояния инпута
