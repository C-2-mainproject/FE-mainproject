import Header from "./Header";
import Footer from "./Footer";

const Layout = (props: { children?: React.ReactNode }) => {
  const location = window.location.pathname;

  return (
    <>
      {location !== "/" && <Header />}
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
