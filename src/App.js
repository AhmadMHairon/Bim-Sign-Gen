import logo from "./logo.svg";
import "./App.css";
import SignForm from "./signForm/signForm";
import SignGen from "./signGen/signGen";
import { useState } from "react";

function App() {
  const [details, setDetails] = useState({
    fullNameE: "",
    fullNameA: "",
    positionE: "",
    positionA: "",
    phoneNumber: "",
  });

  const objectMakerO = (detailsObject) => {
    setDetails(detailsObject);
  };

  return (
    <body>
      <SignForm objectMakerO={objectMakerO} details={details}></SignForm>
      <SignGen details={details}></SignGen>
    </body>
  );
}

export default App;
