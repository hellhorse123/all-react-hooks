import React, { useReducer, useState } from "react";

import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !==action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

function UseReducerHook() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        name: name,
      },
    });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default UseReducerHook;

/*

useReducer для счетчика


import React, { useReducer, useState } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default UseReducerHook;

// идея использования reducer - он дает более конкретный способ обработки сложного состояния, дает набор действия, которые вы можете выполнять в своем состоянии, и он преобразует старое состояние в новое, основываясь на действии, которое вы отправляете
*/
