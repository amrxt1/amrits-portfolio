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
            className="space-y-2"
          >
            <p>Use the tmux-like bar at the bottom for switching pages</p>
            <p>
              Press
              <span className="text-green-500/70 italic">{' "/" '}</span>
              anytime for quick actions
            </p>
            <p>
              Do NOT input
              <span className="text-green-500/70 italic">{' "meme" '}</span>
              into the Launcher
            </p>
          </Display>
        </ScreenOverlay>
      )}
      {children}
    </>
  );
}
