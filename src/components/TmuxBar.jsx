import Container from "./Container";
import Link from "next/link";

const TmuxBar = () => {
  return (
    <div className="bg-background fixed bottom-0 z-50 w-full pb-4">
      <Container className="text-background flex bg-green-500 py-0.25 text-sm lg:text-base">
        <div className="flex flex-1 gap-2 md:gap-4">
          <span>[0]</span>
          <Link href={"/"}>0:home</Link>
          <Link href={"/projects"}>1:projects</Link>
          <Link href={"/contact"}>2:contact</Link>
          <Link className="hidden md:block" href={"https://github.com/amrxt1"}>
            3:github
          </Link>
        </div>
        <p className="hidden md:block">"/" for launcher</p>
      </Container>
    </div>
  );
};

export default TmuxBar;
