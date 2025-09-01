import Container from "@/components/Container";
import CodeBlock from "./CodeBlock";
import Link from "next/link";
import HeroWelcome from "@/components/home/HeroWelcome";

const Hero = () => {
  return (
    <Container className="*:border-text/20 *:hover:border-text/50 mt-4 grid grid-cols-1 *:border lg:grid-cols-2">
      <div className="col-span-1 lg:col-span-2">
        <HeroWelcome />
      </div>
      <CodeBlock className="border-text text-red-500" cmd="whoami">
        <p>Systems programmer who builds ARM CPUs in Verilog</p>
        <p>Full-stack developer with a hardware background</p>
      </CodeBlock>
      <CodeBlock cmd="cat projects.md">
        <p>- ARM CPU: Pipelined processor core</p>
        <p>- CCHive: Student collaboration platform</p>
        <p>- Custom Assembler for ARMv7 ISA subset</p>
        <Link href="/projects" className="underline hover:text-green-500">
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
        <p>up 3 months, Verilog </p>
        <p>up 1 years, React </p>
        <p>up 3 years, Rails </p>
        <p>up 5 years, Linux </p>
      </CodeBlock>
    </Container>
  );
};

export default Hero;
