// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MobileScreenNavbar from "./components/MobileScreenNavbar";
import { useEffect, useState } from "react";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <BrowserRouter>
      <>{windowWidth > 960 ? <Navbar /> : <MobileScreenNavbar />}</>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={
            <div>
              <h1>Welcome to our product page</h1>
            </div>
          }
        />
        <Route
          path="/delivery"
          element={
            <div>
              <h1>You are safe with us to deliver your amazing coffee</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
