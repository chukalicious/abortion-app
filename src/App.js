import "./App.css";

import Header from "./common/Header";
import Footer from "./common/Footer";
import StateOptionContainer from "./components/StateOption";
function App() {
  return (
    <div className="App">
      <Header />
      <StateOptionContainer />
      <Footer />
    </div>
  );
}

export default App;
