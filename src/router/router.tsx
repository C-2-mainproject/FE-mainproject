import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "../components/Common/index";

import {
  Main,
  MyVoca,
  Game,
  MyVocaDetail,
  WordTestService,
  SharedVoca,
  Board,
  BoardDetail,
  BoardAdd,
  BoardEdit,
  PlayGame,
  MyPage,
  SharedVocaDetail,
  WordTestResult,
  GameGuide,
} from "../pages";

import MainGuide from "../pages/MainGuide";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/myvoca" element={<MyVoca />} />
          <Route path="/myvoca-detail/:id" element={<MyVocaDetail />} />
          <Route path="/wordtest/:id" element={<WordTestService />} />
          <Route path="/sharedvoca" element={<SharedVoca />} />
          <Route path="/sharedvoca-detail/:id" element={<SharedVocaDetail />} />
          <Route path="/game" element={<Game />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board-detail/:id" element={<BoardDetail />} />
          <Route path="/board-add" element={<BoardAdd />} />
          <Route path="/board-edit/:id" element={<BoardEdit />} />
          <Route path="/playgame" element={<PlayGame />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/wordtest-result" element={<WordTestResult />} />
          <Route path="/gameguide" element={<GameGuide />} />
          <Route path="/mainguide" element={<MainGuide />} />
          <Route path="*" element={<div>404 Error</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
