import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../jsonFiles/categories.json";
import CategoryInfo from "../components/CategoryInfo";

export default function Category( { categoryName } ) { 

  const categoryInfo = data[`${categoryName}`];

  return (
    <div id="category">
      <Header />
      <CategoryInfo categoryInfo={categoryInfo} />
      <Footer />
    </div>
  );
}
