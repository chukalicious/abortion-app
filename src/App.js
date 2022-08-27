import "./App.css";

import { useEffect } from "react";
import axios from "axios";
import { config, baseUrl, minorsEndpoint } from "./axiosConfig";

import Header from "./common/Header";
import UserInfoForm from "./components/UserInfoForm";
import Footer from "./common/Footer";
function App() {
  useEffect(() => {
    axios
      .get(`${baseUrl}${minorsEndpoint}`, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Header />
      <UserInfoForm />
      <Footer />
    </div>
  );
}

export default App;
