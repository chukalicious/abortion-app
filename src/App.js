import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Header from "./common/Header";
import Footer from "./common/Footer";
import StateOptionContainer from "./components/StateOption";
function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="App">
      <Header />
      <StateOptionContainer />
      <Footer />
    </div>
  );
}

export default App;
