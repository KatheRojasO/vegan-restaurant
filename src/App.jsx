import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/css/styles.css";
import MainPage from "./pages/MainPage";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

// good
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* naming -1 name can be either category or name and with that it fits in 1 line! */}
          {/* naming -1 rename MainPage to Home as is the custom name for the first page */}
          {/* note that you have hardcoded routes. If i edit the category json, i need to manually add more routes here */}
          <Route path="/" element={<MainPage />} />
          <Route path="/dishes" element={<Category name={"dishes"} />} />
          <Route path="/drinks" element={<Category name={"drinks"} />} />
          <Route path="/desserts" element={<Category name={"desserts"} />} />
          <Route path="/contact" element={<Contact name={"contact"} />} />
          <Route path="/dishes/:id" element={<Product name={"dishes"} />} />
          <Route path="/drinks/:id" element={<Product name={"drinks"} />} />
          <Route path="/desserts/:id" element={<Product name={"desserts"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
