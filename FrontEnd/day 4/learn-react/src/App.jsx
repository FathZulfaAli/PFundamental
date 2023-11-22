/** @format */

import "./App.css";
import { Route, Routes } from "react-router-dom";

function DisplayName() {
  return <h1>Fath</h1>;
}

function PropsDisplayName(props) {
  return (
    <h1>
      Halo namanya {props.firstName} {props.lastName}
    </h1>
  );
}

function App() {
  const myName = "Fath";
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>about</h1>} />
        </Routes>
        {/* Kalo mau ngasih class itu pake syntax className */}
        <div className="header">
          <h1>hello {myName}</h1>
        </div>
        <DisplayName />
        <PropsDisplayName firstName="Lord" lastName="Majes" />
        <PropsDisplayName firstName="Ali" lastName="Maju" />
      </div>
    </>
  );
}

export default App;
