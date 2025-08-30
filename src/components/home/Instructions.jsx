"use client";
import { useState } from "react";

import ScreenOverlay from "@/components/ScreenOverlay";
import Display from "@/components/Display";

export default function Instructions({ children }) {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <>
      {showOverlay && (
        <ScreenOverlay clickHandler={() => setShowOverlay(false)}>
          <Display>
            <h1 className="text-xl font-bold text-green-400">Hello World</h1>
            <p className="mb-4 text-sm">
              This is inside the fullscreen overlay!
            </p>
            <p>Step0: Do not click X</p>
            <p>Step1: Do not click X</p>
            <p>Step2: Do not click X</p>
            <p>Step3: Do not click X</p>
            <p>Step4: Do not click X</p>
            <p className="text-red-500/80">Step5: Click X</p>
          </Display>
        </ScreenOverlay>
      )}
      {children}
    </>
  );
}
