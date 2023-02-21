import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/footer";
import RoutesApp from "./pages/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </>
  );
}

export default App;
