import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import NoFound from "./components/4o4/NoFound";
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<NoFound />} />
      </Routes>
      {/* <Header></Header> */}
    </div>
  );
}

export default App;
