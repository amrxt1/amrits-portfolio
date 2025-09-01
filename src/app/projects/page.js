import Container from "@/components/Container";
import projectsData from "@/data/projectsData";
import CodeBlock from "@/components/home/CodeBlock";
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

const Projects = () => {
  return (
    <>
      <Container>
        <CodeBlock cmd="ls projects/" className="mt-4 text-lg" />
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Container>
    </>
  );
};

export default Projects;
