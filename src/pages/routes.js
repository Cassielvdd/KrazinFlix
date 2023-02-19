import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchResult from "./search";
import PageF from "./filme";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<SearchResult />} />
        <Route exact path="/filme/:id" element={<PageF />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
