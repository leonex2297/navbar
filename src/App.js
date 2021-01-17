import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Modal from "./Modal/Modal";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <Navbar />
        <Modal />
      </div>
    </div>
  );
}

export default App;
