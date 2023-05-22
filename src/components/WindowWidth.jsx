import { useState, useEffect } from "react";

const WindowWidthComponent = () => {
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
    <div>
      <h1>..............{windowWidth}px</h1>
    </div>
  );
};

export default WindowWidthComponent;
