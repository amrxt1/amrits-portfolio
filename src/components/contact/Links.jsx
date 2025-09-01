import Link from "next/link";

const Links = () => {
  return (
    <div>
      <h1 className="text-2xl">Links</h1>
      <div className="*:cursor-pointor flex flex-wrap gap-6 gap-y-2 *:hover:text-green-500 *:hover:underline">
        <Link href={"https://linkedin.com/in/amritveer-singh"}>[LinkedIn]</Link>
        <Link href={"https://github.com/amrxt1"}>[GitHub]</Link>
        <Link href={"https://instagram.com/amrit_veer_singh"}>[Instagram]</Link>
        <Link href={"mailto:admin@amritv.space"}>[Email]</Link>
      </div>
    </div>
  );
};

export default Links;
