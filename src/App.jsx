import React, { useEffect, useRef, useState } from "react";
import About from "./components/About/About";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import CustomCursor from "./CustomCursor";
import useLocoScroll from "./hooks/useLocoScroll";


function App() {
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(1);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty Flower</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <div className="main-container" id="main-container">
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
