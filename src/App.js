import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Header from "./common/Header";
import StateOptionContainer from "./components/StateOption";
import Footer from "./common/Footer";
function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div>
      <Header />
      <StateOptionContainer />
      <Footer />
    </div>
  );
}

export default App;
