"use client";
import { useState } from "react";

import ScreenOverlay from "@/components/ScreenOverlay";
import Display from "@/components/Display";
import Link from "next/link";

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
            <p>
              Use the tmux-like bar at the bottom for switching pages. It has
              clickable links to navigate around.
            </p>
            <p className="hidden md:block">
              Press
              <span className="text-green-500/80 italic">{' "/" '}</span>
              anytime to summon the launcher.
            </p>
            <p className="hidden md:block">
              NB: Do NOT input
              <span className="text-green-500/80 italic">{' "meme" '}</span>
              into the Launcher
            </p>
            <p className="text-red-300">
              For a simpler layout, you can visit:{" "}
              <Link
                href={"https://amritv.space"}
                className="text-background rounded-lg bg-green-500 px-4 font-bold"
              >
                here
              </Link>
            </p>
          </Display>
        </ScreenOverlay>
      )}
      {children}
    </>
  );
}
