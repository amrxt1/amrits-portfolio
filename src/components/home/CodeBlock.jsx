const CodeBlock = ({
  children,
  cmd = "ls",
  className = "",
  alwaysAnimate = false,
}) => {
  return (
    <div className={`${className} group`}>
      <div>
        <span className="mr-1 text-green-500">amrit@portfolio:~$</span>
        <span>{cmd}</span>
        <span
          className={`border-text ml-1 border text-transparent ${alwaysAnimate ? "bg-text animate-[blink_1s_steps(1)_infinite]" : "group-hover:bg-text group-hover:animate-[blink_1s_steps(1)_infinite]"} `}
        >
          |
        </span>
      </div>
      <div className="text-text/80">{children}</div>
    </div>
  );
};

export default CodeBlock;
