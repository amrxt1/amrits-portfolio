import Container from "@/components/Container";
import projectsData from "@/data/projectsData";
import CodeBlock from "@/components/home/CodeBlock";
import Link from "next/link";

function Project({ project }) {
  const { title, desc, slug, techUsed, repo } = project;
  return (
    <div className="mt-4">
      <Link
        href={`/projects/${slug}`}
        className="underline hover:text-green-400"
      >
        {title}
      </Link>
      <Link
        href={`https://github.com/amrxt1/${repo}`}
        className="ml-4 hover:text-green-400"
      >
        [view code]
      </Link>
      <div className="text-text/75">{desc}</div>
      <div className="text-text/75">{techUsed.join(", ")}</div>
    </div>
  );
}

const Projects = () => {
  return (
    <>
      <CodeBlock cmd="ls projects/" />
      <Container>
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Container>
    </>
  );
};

export default Projects;
