"use client";
import { motion } from "motion/react";
import Container from "@/components/Container";
import projectsData from "@/data/projectsData";
import CodeBlock from "@/components/home/CodeBlock";
import { useState } from "react";
import Link from "next/link";

function Project({ project }) {
  const { title, slug, techUsed, repo } = project;
  return (
    <div className="mt-2">
      <Link
        href={`/projects/${slug}`}
        className="font-bold hover:text-green-500 hover:underline"
      >
        {`${title}/`}
      </Link>
      <Link
        href={`https://github.com/amrxt1/${repo}`}
        className="ml-4 font-bold hover:text-green-500 hover:underline"
      >
        [view code]
      </Link>
      <div className="text-text/85 text-sm italic">{techUsed.join(", ")}</div>
    </div>
  );
}

function FilterButton({
  t,
  clickHandler = () => alert("how you doin today?"),
  q,
}) {
  return (
    <motion.button
      onClick={clickHandler}
      className={`${q === t ? "text-green-500" : "text-red-500/80"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {t}
    </motion.button>
  );
}

const Projects = () => {
  const totalTech = projectsData.map((p) => p.techUsed).flat();
  const uniqueTech = ["all", ...new Set(totalTech)].sort();

  const [query, setQuery] = useState("all");
  const filteredProjects =
    query === "all"
      ? projectsData
      : projectsData.filter((p) => p.techUsed.includes(query));

  return (
    <>
      <Container>
        <CodeBlock
          cmd={`${query !== "all" ? "ls projects/ | grep " + query : "ls projects/ -a"}`}
          className="my-4 text-sm"
        />
        <div className="w-full rounded-sm border border-green-500/50 px-2 py-1">
          <p>Filter:</p>
          <div className="flex gap-x-2">
            {uniqueTech.map((t, i) => (
              <FilterButton
                t={t}
                key={t + query}
                q={query}
                clickHandler={() => setQuery(t)}
              />
            ))}
          </div>
        </div>
        {filteredProjects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </Container>
    </>
  );
};

export default Projects;
