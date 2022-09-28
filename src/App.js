import React from "react";
import "./App.sass";
import { Routes, Route, Link } from "react-router-dom";
import UseStateHook from "./hooks/UseStateHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UseMemoHook from "./hooks/UseMemoHook";
import UseRefHook from "./hooks/UseRefHook";
import UseContextHook from "./hooks/UseContext/UseContextHook";
import UseReducerHook from "./hooks/UseReducer/useReducerHook";
import UseCallbackHook from "./hooks/UseCallback/UseCallback";
import CustomHookLocalStorage from "./hooks/CustomHookLocalStorage/CustomHookLocalStorage.js.js";
import UseLayoutEffectHook from "./hooks/UseLayout/UseLayoutEffect";
import UseTransitionHook from "./hooks/UseTransitionHook";
import UseDeferredValueHook from "./hooks/UseDeferredValue/UseDeferredValueHook";
import UseImperativeHandleHook from "./hooks/UseImperativeHandle/UseImperativeHandleHook";
import UseImperativeHandleHookModal from "./hooks/UseImperativeHandleV2/UseImperativeHandleHookModal";
import CustomHookDebugValue from "./hooks/CustomHookDebugValue/CustomHookDebugValue";
import UseIdHook from "./hooks/UseId/UseIdHook";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/state">UseState</Link>
          </li>

          <li>
            <Link to="/effect">UseEffect</Link>
          </li>

          <li>
            <Link to="/memo">UseMemo</Link>
          </li>

          <li>
            <Link to="/ref">UseRef</Link>
          </li>

          <li>
            <Link to="/context">UseContext</Link>
          </li>

          <li>
            <Link to="/reducer">UseReducer</Link>
          </li>

          <li>
            <Link to="/callback">UseCallback</Link>
          </li>

          <li>
            <Link to="/custom_local">CustomHookLocalStorage</Link>
          </li>

          <li>
            <Link to="/layout_effect">UseLayoutEffectHook</Link>
          </li>

          <li>
            <Link to="/transition">UseTransitionHook</Link>
          </li>

          <li>
            <Link to="/deferred_value">UseDeferredValueHook</Link>
          </li>

          <li>
            <Link to="/imperative_handle">UseImperativeHandleHook</Link>
          </li>

          <li>
            <Link to="/imperative_handle_modal">
              UseImperativeHandleHookModal
            </Link>
          </li>

          <li>
            <Link to="/custom_debug">CustomHookDebugValue</Link>
          </li>

          <li>
            <Link to="/id">UseIdHook</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/state" element={<UseStateHook />}></Route>
          <Route path="/effect" element={<UseEffectHook />}></Route>
          <Route path="/memo" element={<UseMemoHook />}></Route>
          <Route path="/ref" element={<UseRefHook />}></Route>
          <Route path="/context" element={<UseContextHook />}></Route>
          <Route path="/reducer" element={<UseReducerHook />}></Route>
          <Route path="/callback" element={<UseCallbackHook />}></Route>
          <Route
            path="/custom_local"
            element={<CustomHookLocalStorage />}
          ></Route>
          <Route
            path="/layout_effect"
            element={<UseLayoutEffectHook />}
          ></Route>
          <Route path="/transition" element={<UseTransitionHook />}></Route>
          <Route
            path="/deferred_value"
            element={<UseDeferredValueHook />}
          ></Route>
          <Route
            path="/imperative_handle"
            element={<UseImperativeHandleHook />}
          ></Route>
          <Route
            path="/imperative_handle_modal"
            element={<UseImperativeHandleHookModal />}
          ></Route>
          <Route
            path="/custom_debug"
            element={<CustomHookDebugValue />}
          ></Route>

          <Route path="/id" element={<UseIdHook />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
