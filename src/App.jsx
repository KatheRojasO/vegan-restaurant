import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/css/styles.css";
import MainPage from "./pages/MainPage";
import Category from "./pages/Category";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/dishes' element={<Category categoryName={"dishes"} />} />
          <Route path='/drinks' element={<Category categoryName={"drinks"} />} />
          <Route path='/desserts' element={<Category categoryName={"desserts"} />} />
          <Route path='/contact' element={<Contact categoryName={"contact"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
