import MainHeader from "./main-header";

const LayoutPage = ({ children }) => {
  return (
    <div>
      <MainHeader />;{children}
      <main>{children}</main>
    </div>
  );
};

export default LayoutPage;
