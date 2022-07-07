import logo from "./logo.svg";
import "./App.css";

import MyRoutes from "./myRoutes";
import { Routes, Route } from "react-router-dom";
import OffcanvasInfo from "./components/OffcanvasInfo/OffcanvasInfo";

function App() {
  return (
    <div className="App">
      <OffcanvasInfo />
      <MyRoutes />
    </div>
  );
}

export default App;
