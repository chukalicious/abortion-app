import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Header from "./pages/Header";
import Home from "./pages/Home";
import StateOptionContainer from "./components/StateOption";
import Footer from "./pages/Footer";
function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div>
      <Header />
      <Home />
      <StateOptionContainer />
      <Footer />
    </div>
  );
}

export default App;
