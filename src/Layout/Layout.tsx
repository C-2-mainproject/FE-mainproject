import Header from "./Header";
import styled from "styled-components";

const Layout = (props: { children?: React.ReactNode }) => {
  const location = window.location.pathname;

  return (
    <>
      {location !== "/" && <Header />}
      <LayOut>{props.children}</LayOut>
    </>
  );
};

export default Layout;

const LayOut = styled.div`
  width: 100vw;
`;
