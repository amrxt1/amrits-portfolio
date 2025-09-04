"use client";

import ScreenOverlay from "@/components/ScreenOverlay";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import projectsData from "@/data/projectsData";
import Link from "next/link";
import { useRouter } from "next/navigation";

const projectLinks = projectsData.map((p) => {
  return {
    name: p.title,
    href: `/projects/${p.slug}`,
    category: "project",
  };
});

const commands = [
  { name: "home", href: "/", category: "navigation" },
  { name: "projects", href: "/projects", category: "navigation" },
  { name: "contact", href: "/contact", category: "navigation" },
  ...projectLinks,
];

const Launcher = () => {
  const [showLauncher, setLauncher] = useState(false);
  const [searchQuery, setQuery] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const nodeName = event.target.nodeName;
      const keyPressed = event.key;

      if (keyPressed === "Escape") {
        event.preventDefault();
        setLauncher(false);
        setQuery("");
      }

      if (nodeName === "INPUT" || nodeName === "TEXTAREA") {
        if (keyPressed === "Enter" && showLauncher) {
          console.log("Enter pressed");
          event.preventDefault();

          const lowerSearch = searchQuery.toLowerCase();
          const filteredItems = commands.filter(
            (c) =>
              c.name.toLowerCase().includes(lowerSearch) ||
              c.href.includes(lowerSearch),
          );

          if (filteredItems.length > 0) {
            router.push(filteredItems[0].href);
            setLauncher(false);
            setQuery("");
          }
        }
        return;
      }

      if (keyPressed === "/") {
        event.preventDefault();
        setLauncher(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showLauncher, searchQuery]);

  useEffect(() => {
    if (showLauncher && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [showLauncher]);

  const lowerSearch = searchQuery.toLowerCase();

  const filteredItems = commands.filter(
    (c) =>
      c.name.toLowerCase().includes(lowerSearch) ||
      c.href.includes(lowerSearch),
  );

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
                value={searchQuery}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                type="text"
                className="mb-2 w-full border border-green-500/50 p-4 py-2 text-lg focus:border-green-500 focus:outline-none"
                placeholder="Type a command"
              />
              {filteredItems.map((i, idx) => (
                <div
                  key={i.href}
                  className={`my-2 rounded p-2 transition-colors ${
                    idx === 0 ? "bg-green-500/10" : ""
                  }`}
                >
                  <Link
                    href={i.href}
                    className="group flex justify-between"
                    onClick={() => {
                      setLauncher(false);
                      setQuery("");
                    }}
                  >
                    <span>{i.name}</span>
                    <span>{i.category}</span>
                  </Link>
                </div>
              ))}
              {filteredItems.length === 0 && searchQuery && (
                <div className="text-text/50 p-2">No results found</div>
              )}
            </motion.div>
          </ScreenOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Launcher;
