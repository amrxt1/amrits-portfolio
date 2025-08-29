const CommandBar = () => {
  return (
    <div className="sticky top-0 mt-2 flex w-full gap-2 border border-white/30 px-2 text-base">
      <span className="text-green-500">amrit@portfolio:$</span>
      <input className="flex-1 focus:outline-none" />
    </div>
  );
};

export default CommandBar;
