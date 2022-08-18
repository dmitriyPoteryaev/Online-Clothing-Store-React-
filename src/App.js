import Content from "./pages/Content/Content";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "./pages/About/About";
import Navbar from "./components/UI/Navbar/Navbar";


function App() {
  


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/about" element={<About />} />

          <Route exact path={"/louis_Vuitton"} element={<Content />} />

          <Route exact path={"/louis_Vuitton/:CurrentchaptersOfMenu"} element={<Content />} />
          <Route path="*" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
