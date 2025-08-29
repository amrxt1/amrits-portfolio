import Link from "next/link";

const TmuxBar = () => {
  return (
    <div className="fixed bottom-[5px] flex w-full gap-2 bg-green-400 px-2 font-mono text-sm text-black">
      <span>[0]</span>
      <Link href={"/"}>0:home</Link>
      <Link href={"https://github.com/amrxt1"}>1:github</Link>
    </div>
  );
};

export default TmuxBar;
