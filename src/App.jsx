import { BrowserRouter, Switch, Routes, Route, Link } from "react-router-dom";
import "../src/css/styles.css";
import MainPage from "./pages/MainPage";
import Dishes from "./pages/Dishes";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/dishes-menu' element={<Dishes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
