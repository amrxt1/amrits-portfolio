import ScreenOverlay from "@/components/ScreenOverlay";

const filteredItems = ["lol", "cat"];

const Launcher = () => {
  return (
    <>
      <div className="sticky top-0 mt-2 flex w-full gap-2 border border-white/30 px-2 text-base">
        <span className="text-green-500">amrit@portfolio:$</span>
        <input className="flex-1 focus:outline-none" />
      </div>

      <ScreenOverlay>
        <div className="bg-background">
          <input
            className="w-full border border-green-500 bg-transparent px-4 py-2"
            placeholder="Type to search..."
          />
          <div className="mt-1 border border-green-500/50">
            {filteredItems.map((item, i) => (
              <div key={i} className="px-4 py-2 hover:bg-green-500/20">
                {item}
              </div>
            ))}
          </div>
        </div>
      </ScreenOverlay>
    </>
  );
};

export default Launcher;
