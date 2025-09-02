"use client";

import ScreenOverlay from "@/components/ScreenOverlay";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const Launcher = () => {
  const [showLauncher, setLauncher] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyPressed = event.key;

      console.log(keyPressed + " pressed!");

      if (keyPressed === "/") {
        event.preventDefault();
        setLauncher(true);
      }

      if (keyPressed === "Escape") {
        event.preventDefault();
        setLauncher(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (showLauncher && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [showLauncher]);

  const filteredItems = ["lol", "cat"];

  return (
    <>
      <AnimatePresence>
        {showLauncher && (
          <ScreenOverlay>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-background border-text/50 border p-4 select-none"
            >
              <input
                ref={inputRef}
                type="text"
                className="border border-green-500/50 p-4 py-2 text-lg focus:border-green-500 focus:outline-none"
                placeholder="Type a command"
              />
              {filteredItems.map((f, i) => (
                <p key={i}>{f}</p>
              ))}
            </motion.div>
          </ScreenOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Launcher;
