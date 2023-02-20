import "./App.css";
import Home from "./Components/Home/Home.jsx";
import Services from "./Components/Services/Services.jsx";
import TechStack from "./Components/TechStack/TechStack.jsx";
import WhyUs from "./Components/WhyUs/WhyUs.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/techstack" element={<TechStack />}></Route>
            <Route path="/whyus" element={<WhyUs />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
