import React from "react";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import "./App.scss";

import Home from "./containers/Home";
import Lesson1 from "./containers/Lesson1";
import Lesson2 from "./containers/Lesson2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/lesson1">Lesson1</Link>
          <Link to="/lesson2">Lesson2</Link>
        </header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lesson2" element={<Lesson2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
