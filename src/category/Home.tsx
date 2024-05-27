import React, { useContext } from "react";
import { rootContext } from "../Root";

export default function Home() {
  const context = useContext(rootContext);
  const { state, dispatching } = context;
  const { name } = state;
  return (
    <button
      onClick={() => {
        dispatching("N_C", "N_C");
      }}
    >
      {state.name}
    </button>
  );
}
