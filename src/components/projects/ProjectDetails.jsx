import Container from "@/components/Container";

const ProjectDetails = ({ project }) => {
  const {
    title,
    desc,
    img,
    techUsed = [],
    features = [],
    details,
    repo,
    preview,
  } = project;
  return (
    <Container className="mt-4">
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{img}</p>
      <p>{techUsed}</p>
      <p>{features}</p>
      <p>{details}</p>
      <p>{repo}</p>
    </Container>
  );
};

export default ProjectDetails;
