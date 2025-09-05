import Container from "./Container";
import Link from "next/link";
import Asterisk from "@/components/Asterisk";

const links = [
  {
    href: "/",
    name: "0:home",
  },
  {
    href: "/projects",
    name: "1:projects",
  },
  {
    href: "/contact",
    name: "2:contact",
  },
  {
    className: "hidden md:block",
    href: "https://github.com/amrxt1",
    name: "3:github",
  },
];

function TmuxLink({ link }) {
  const { href = "", name = "", className = "" } = link;
  return (
    <Link href={href} className={className}>
      {name}
      <Asterisk href={href} />
    </Link>
  );
}

const TmuxBar = () => {
  return (
    <div className="bg-background fixed bottom-0 z-50 w-full pb-4">
      <Container className="text-background flex bg-green-500 py-0.25 text-sm lg:text-base">
        <div className="flex flex-1 gap-2 md:gap-4">
          <span>[0]</span>

          {links.map((l, idx) => (
            <TmuxLink key={idx} link={l} />
          ))}
        </div>
        <p className="hidden md:block">"/" for launcher</p>
      </Container>
    </div>
  );
};

export default TmuxBar;
