import { useEffect } from "react";
import Container from "./Container";

const ScreenOverlay = ({ children, clickHandler }) => {
  return (
    <>
      <Container className="relative flex justify-end">
        <button
          className="bg-background absolute z-20 m-2 cursor-pointer p-1 text-2xl text-green-400"
          onClick={clickHandler}
        >
          [<span className="hover:text-text hover:underline">X</span>]
        </button>
      </Container>
      <div className="bg-background/60 fixed inset-0 z-10 flex items-center justify-center overflow-auto p-4 pb-16 backdrop-blur-[1.35px]">
        <div className="max-h-full max-w-4xl overflow-auto">{children}</div>
      </div>
    </>
  );
};

export default ScreenOverlay;
