import Container from "./Container";
import Link from "next/link";

const TmuxBar = () => {
  return (
    <div className="bg-background fixed bottom-0 z-50 w-full pb-4">
      <Container className="flex gap-2 bg-green-500 py-0.25 text-sm text-black lg:text-base">
        <span>[0]</span>
        <Link href={"/"}>0:home</Link>
        <Link href={"/projects"}>1:projects</Link>
        <Link href={"/contact"}>2:contact</Link>
        <Link className="hidden" href={"https://github.com/amrxt1"}>
          3:github
        </Link>
      </Container>
    </div>
  );
};

export default TmuxBar;
