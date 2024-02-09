import * as React from "react";
import Home from "./Components/Home";
import '../src/App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Files from "./Components/Files";
import Messages from "./Components/Messages";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/files" element={<Files />} />
        <Route exact path="/messages" element={<Messages />} />
      </Routes>
    </>
  );
}

export default App;