import * as React from "react";
import Home from "./Components/Home";
import '../src/App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Files from "./Components/Files";
import Messages from "./Components/Messages";
import Upload from "./Components/Upload";
import MessageApp from "./Components/MessageApp";
import MessageDisplay from "./Components/MessageDisplay";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/files" element={<Files />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/messageApp" element={<MessageApp />} />
        <Route exact path="/message-display" element={<MessageDisplay/>} />
      </Routes>
    </>
  );
}

export default App;