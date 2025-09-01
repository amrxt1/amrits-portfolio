const ScreenOverlay = ({ children, clickHandler }) => {
  return (
    <>
      <div className="bg-background/80 fixed inset-0 z-10 flex items-center justify-center overflow-auto p-4 pb-16 backdrop-blur-[1.35px]">
        <div className="max-h-full max-w-4xl overflow-auto">{children}</div>
      </div>
    </>
  );
};

export default ScreenOverlay;
