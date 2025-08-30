import Container from "@/components/Container";
import Link from "next/link";

const ProjectDetails = ({ project }) => {
  const {
    title = "no title here.",
    img = null,
    techUsed = [],
    features = [],
    details = "no details here.",
    repo = null,
    preview = null,
  } = project;
  return (
    <Container className="mt-4 space-y-2">
      <div>
        <h1 className="text-lg text-red-500">{title}</h1>
        <div className="flex gap-4">
          {repo && (
            <Link href={`https://github.com/amrxt1/${repo}`} target="_blank">
              [<span className="underline hover:text-green-400">view code</span>
              ]
            </Link>
          )}
          {preview && (
            <Link href={preview} target="_blank">
              [
              <span className="underline hover:text-green-400">
                live preview
              </span>
              ]
            </Link>
          )}
        </div>
      </div>
      <p className="text-text/70">{details}</p>
      <p>made using: {techUsed.join(", ")}</p>
      {img && (
        <div className="my-4 flex w-full justify-center">
          <img
            src={img}
            alt={`${title} preview`}
            className="border-text/50 max-w-[75%] rounded-sm border-2"
          />
        </div>
      )}
      {features.length && (
        <div>
          <h2>Features</h2>
          <div className="text-text/70">
            {features.map((f, i) => (
              <p key={i}>- {f}</p>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProjectDetails;
