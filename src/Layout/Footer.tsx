import styled from "styled-components";
const Footer = () => {
  return (
    <FooterMenu>
      <section>Footer 컴포넌트입니다!</section>
    </FooterMenu>
  );
};

export default Footer;

const FooterMenu = styled.div`
  background-color: #bdbdbd;
  height: 900px;
  display: flex;
  align-items: center;
`;
