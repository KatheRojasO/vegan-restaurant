import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductInfo from "../components/ProductInfo";
import data from "../jsonFiles/products.json";


export default function Product({ categoryName }) {

  const params = useParams();

  const product = data[`${categoryName}`].filter((product)=>(
    product.id === parseInt(params.id)
  ))

  return (
    <div>
      <Header />
      <ProductInfo product={product[0]} />
      <Footer />
    </div>
  )
}
