import React from "react";
import "./App.css";
import Router from "./router/router";
import Layout from "./Layout/Layout";
import { GlobalStyle } from "./styles/GlobalStyle";
function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Router />
    </Layout>
  );
}

export default App;
