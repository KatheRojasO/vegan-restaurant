import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/css/styles.css";
import MainPage from "./pages/MainPage";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/dishes"
            element={<Category categoryName={"dishes"} />}
          />
          <Route
            path="/drinks"
            element={<Category categoryName={"drinks"} />}
          />
          <Route
            path="/desserts"
            element={<Category categoryName={"desserts"} />}
          />
          <Route
            path="/contact"
            element={<Contact categoryName={"contact"} />}
          />
          <Route
            path="/dishes/:id"
            element={<Product categoryName={"dishes"} />}
          />
          <Route
            path="/drinks/:id"
            element={<Product categoryName={"drinks"} />}
          />
          <Route
            path="/desserts/:id"
            element={<Product categoryName={"desserts"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
