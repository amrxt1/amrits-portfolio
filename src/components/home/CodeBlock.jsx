import Container from "@/components/Container";

const CodeBlock = ({ children, cmd = "ls", className = "" }) => {
  return (
    <Container className={`mt-4 ${className}`}>
      <div>
        <span className="mr-1 text-green-400">amrit@portfolio:~$</span>
        <span>{cmd}</span>
      </div>
      <div className="text-text/75">{children}</div>
    </Container>
  );
};

export default CodeBlock;
