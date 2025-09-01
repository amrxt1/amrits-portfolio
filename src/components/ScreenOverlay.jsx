const ScreenOverlay = ({ children, clickHandler }) => {
  return (
    <>
      <div className="bg-background/80 backdrop-blur- fixed inset-0 z-10 flex items-center justify-center overflow-auto p-4 pb-16">
        <div className="max-h-full max-w-4xl overflow-auto">{children}</div>
      </div>
    </>
  );
};

export default ScreenOverlay;
