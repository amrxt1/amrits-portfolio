"use client";
function defaultHandler() {
  alert("Unfortunately, the button is still being wired.");
}

const Display = ({
  children,
  heading = "",
  clickHandler = defaultHandler,
  subHeading = "",
  className = "",
}) => {
  return (
    <div className="bg-background z-20 overflow-auto rounded-sm border border-green-500 p-4 py-10">
      <div className="flex flex-wrap items-center">
        <h1 className="flex-1 text-xl font-bold text-green-500">{heading}</h1>
        <button
          onClick={clickHandler}
          className="shrink-0 cursor-pointer text-xl font-bold text-green-500"
        >
          [<span className="hover:text-text hover:underline">{" X "}</span>]
        </button>
      </div>
      <p className="mb-4 text-sm">{subHeading}</p>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Display;
