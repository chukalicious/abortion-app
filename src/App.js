import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { config, baseUrl, statesEndpoint } from "./axiosConfig";

import Header from "./common/Header";
import UserInfoForm from "./components/UserInfoForm";
import Footer from "./common/Footer";
function App() {
  const [formObject, setFormObject] = useState({ age: "", state: "" });
  console.log("formObject", formObject.state);

  const getForm = (sta) => {
    setFormObject({ ...formObject, state: sta });
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}${statesEndpoint}${formObject.state}/`, config)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [formObject]);

  return (
    <div className="App">
      <Header />
      <UserInfoForm getForm={getForm} />
      <Footer />
    </div>
  );
}

export default App;
