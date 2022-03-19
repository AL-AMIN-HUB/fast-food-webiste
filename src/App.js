import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Footer from "./shared/Footer/Footer";
import Register from "./shared/Authentication/Register/Register";
import Login from "./shared/Authentication/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
