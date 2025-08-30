const Container = ({ children, className = "" }) => {
  return (
    <section
      className={`mx-auto px-4 md:px-16 lg:px-32 xl:px-64 2xl:px-80 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
