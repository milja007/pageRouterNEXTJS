import MainHeader from "./main-header";

const LayoutPage = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
};

export default LayoutPage;
