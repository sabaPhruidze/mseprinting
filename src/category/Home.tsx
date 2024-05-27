import React, { useContext } from "react";
import { rootContext } from "../Root";
import CarouselComponent from "../importantparts/CarouselComponent";
export default function Home() {
  const context = useContext(rootContext);
  const { state, dispatching } = context;
  const { name } = state;
  return (
    <div>
      <CarouselComponent />
    </div>
  );
}
