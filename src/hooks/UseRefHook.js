
// здесь useRef сохраняет предыдущее значение value

import React, { useEffect, useRef, useState } from "react";

function UseRefHook() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
}

export default UseRefHook;

/*
В данном случае useRef используется как ссылка на Dom элемент (input)

import React, { useEffect, useRef, useState } from "react";

function UseRefHook() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default UseRefHook;

*/

/*

В данном случае используется useRef вместо useState, чтобы компонент не ушел в infinite loop : useRef полностью отделен от цикла рендеринга нашего компонента

import React, { useEffect, useRef, useState } from "react";

function UseRefHook() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </>
  );
}

export default UseRefHook;


*/
