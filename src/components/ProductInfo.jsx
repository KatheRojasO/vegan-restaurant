import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();

  const ingredientList = product.ingredients.map((ingredient) => (
    <li className="ingredient-list">{ingredient}</li>
  ));

  return (
    <div className="product">
      <div className="product-hero">
        <img className="product-img" src={product.image} alt={product.alt} />
      </div>
      <div className="product-container">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-text">{product.description}</p>
        <h2 className="product-title">Ingredients</h2>
        {ingredientList}
        <h2 className="product-title">Nutrition Facts</h2>
        <table className="facts-table">
          <tr>
            <td className="product-facts">Calories {product.facts.calories}</td>
          </tr>
          <tr>
            <td className="product-facts">Fat {product.facts.fat}</td>
          </tr>
          <tr>
            <td className="product-facts">
              Carbohydrate {product.facts.carbohydrate}
            </td>
          </tr>
          <tr>
            <td className="product-facts">Protein {product.facts.protein}</td>
          </tr>
        </table>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}
