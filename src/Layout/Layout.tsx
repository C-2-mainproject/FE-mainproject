import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
