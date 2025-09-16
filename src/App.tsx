import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
