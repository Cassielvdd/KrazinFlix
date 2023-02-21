import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchResult from "./search";
import PageF from "./filme";
import Erro from "./error";
import Header from "../components/header";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search/:query" element={<SearchResult />} />
        <Route exact path="/filme/:id" element={<PageF />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
