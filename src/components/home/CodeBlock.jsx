const CodeBlock = ({ children, cmd = "ls", className = "" }) => {
  return (
    <div className={`p-2 pb-8 text-sm lg:text-lg ${className}`}>
      <div>
        <span className="mr-1 text-green-500">amrit@portfolio:~$</span>
        <span>{cmd}</span>
      </div>
      <div className="text-text/80">{children}</div>
    </div>
  );
};

export default CodeBlock;
