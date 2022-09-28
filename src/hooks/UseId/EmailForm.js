import React, { useId } from "react";

export default function EmailForm() {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text" />
    </>
  );
}
