"use client";

import CodeBlock from "@/components/home/CodeBlock";
import projectsData from "@/data/projectsData";
import { notFound, useParams } from "next/navigation";
import ProjectDetails from "@/components/projects/ProjectDetails";
import Container from "@/components/Container";

const Project = ({}) => {
  const { slug } = useParams();
  const project = projectsData.find((project) => project.slug === slug);

  if (!project) notFound();

  return (
    <Container>
      <CodeBlock
        cmd={`./${slug} --info`}
        alwaysAnimate
        className="my-4 md:text-lg"
      />
      <ProjectDetails project={project} />
    </Container>
  );
};

export default Project;
