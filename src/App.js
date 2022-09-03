import React from "react";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import "./App.scss";

import Home from "./containers/Home";
import Lesson1 from "./containers/Lesson1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/lesson1">Lesson1</Link>
        </header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/lesson1" element={<Lesson1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
