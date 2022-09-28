import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
// import ClassContextComponent from "./ClassContextComponent";
import { ThemeProvider } from "./ThemeContext";

export const ThemeContext = React.createContext();

function UseContextHook() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
      {/* <ClassContextComponent /> */}
    </ThemeProvider>
  );
}

export default UseContextHook;
