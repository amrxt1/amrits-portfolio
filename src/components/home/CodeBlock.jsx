import Container from "@/components/Container";

const CodeBlock = ({ children, cmd = "ls" }) => {
  return (
    <Container className="mt-4">
      <div>
        <span className="mr-1 text-green-400">amrit@portfolio:~$</span>
        <span>{cmd}</span>
      </div>
      <div className="text-text/75">{children}</div>
    </Container>
  );
};

export default CodeBlock;
