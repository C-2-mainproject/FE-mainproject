import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, MyVoca } from "../pages/index";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/myvoca" element={<MyVoca />} />
          <Route path="*" element={<div>404 Error</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
