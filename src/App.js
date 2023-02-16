import "./App.css";
import Home from "./Components/Home/Home.jsx";
import Industries from "./Components/Industries/Industries.jsx";
import Services from "./Components/Services/Services.jsx";
import TechStack from "./Components/TechStack/TechStack.jsx";
import WhyUs from "./Components/WhyUs/WhyUs.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/industries" element={<Industries />}></Route>
          <Route path="/techstack" element={<TechStack />}></Route>
          <Route path="/whyus" element={<WhyUs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
