import React, { useImperativeHandle } from "react";

function CustomInput({ style, ...props }, ref) {
  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert("hi") };
    },
    []
  );
  return (
    <input
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25em",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  );
}

export default React.forwardRef(CustomInput);

// если вы хотите изменить ref , чтобы она была чем-то совершенно другим, это то, для чего предназначен данный хук
