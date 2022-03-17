import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HeadMenu from "./shared/Menu/HeadMenu";
import Footer from "./shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeadMenu />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
