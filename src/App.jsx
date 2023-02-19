import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/footer";
import RoutesApp from "./pages/routes";
function App() {
  return <RoutesApp />;
}

export default App;
