import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./routes/Homepage";
import { CharsList } from "./routes/CharsList";
import { TierList } from "./routes/TierList";
import { ErrorPage } from "./routes/ErrorPage";
import { Editpage } from "./routes/Editpage"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tierList/" element={<TierList />} />
        <Route path="/charsList/" element={<CharsList />} />
        <Route path="/charsList/:rank-class/" element={<CharsList />} />
        <Route path="/charsList/:rank-class/:heroId/edit" element={<Editpage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
