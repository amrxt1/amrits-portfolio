"use client";

import CodeBlock from "@/components/home/CodeBlock";
import projectsData from "@/data/projectsData";
import { notFound, useParams } from "next/navigation";
import ProjectDetails from "@/components/projects/ProjectDetails";

const Project = ({}) => {
  const { slug } = useParams();
  const project = projectsData.find((project) => project.slug === slug);

  if (!project) notFound();

  return (
    <>
      <CodeBlock cmd={`./${slug} --info`} alwaysAnimate />
      <ProjectDetails project={project} />
    </>
  );
};

export default Project;
