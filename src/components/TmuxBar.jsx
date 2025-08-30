import Container from "./Container";
import Link from "next/link";

const TmuxBar = () => {
  return (
    <Container className="fixed bottom-[10px] flex w-full gap-2 bg-green-400 pr-2 pl-2 text-sm font-semibold text-black">
      <span>[0]</span>
      <Link href={"/"}>0:home</Link>
      <Link href={"/projects"}>1:projects</Link>
      <Link href={"https://github.com/amrxt1"}>2:github</Link>
    </Container>
  );
};

export default TmuxBar;
