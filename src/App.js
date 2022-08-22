import Content from "./pages/Content/Content";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Greeting from "./pages/Greeting/Greeting";
import Navbar from "./components/UI/Navbar/Navbar";


function App() {
  


  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/about" element={<Greeting />} />
          <Route exact path={"/louis_Vuitton/:chapter"} element={<Content />} />
          <Route path="*" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
