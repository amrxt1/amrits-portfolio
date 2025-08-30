import Container from "@/components/Container";
import CodeBlock from "./CodeBlock";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <CodeBlock className="text-red-400" cmd="whoami">
        <p>Systems programmer who builds ARM CPUs in Verilog</p>
        <p>Full-stack developer with a hardware background</p>
      </CodeBlock>
      <CodeBlock cmd="cat projects.md">
        <p>- ARM CPU: Pipelined processor core</p>
        <p>- CCHive: Student collaboration platform</p>
        <p>- Custom Assembler for ARMv7 ISA subset</p>
        <Link href="/projects" className="underline hover:text-green-400">
          view all projects
        </Link>
      </CodeBlock>
      <CodeBlock cmd="ls /usr/bin/">
        <p>
          verilog quartus ruby-on-rails ruby react next-js tailwindcss python
          selenium git
        </p>
      </CodeBlock>
      <CodeBlock cmd="uptime">
        <p>up 21 years </p>
      </CodeBlock>
    </>
  );
};

export default Hero;
