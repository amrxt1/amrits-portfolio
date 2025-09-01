"use client";
import { useState } from "react";

import ScreenOverlay from "@/components/ScreenOverlay";
import Display from "@/components/Display";

export default function Instructions({ children }) {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <>
      {showOverlay && (
        <ScreenOverlay>
          <Display
            clickHandler={() => setShowOverlay(false)}
            heading="Instructions"
            subHeading="Follow the below for navigation"
            className="space-y-20"
          >
            <p>Always keep your eyes on the screen</p>
            <p>Do not type :meme</p>
          </Display>
        </ScreenOverlay>
      )}
      {children}
    </>
  );
}
