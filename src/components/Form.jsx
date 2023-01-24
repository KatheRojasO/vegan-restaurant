import React, { useState } from "react";
import data from "../jsonFiles/form.json";

export default function Form() {
  const [inputs, setInputs] = useState({});

  // Don't use const for functions -1
  // check this video why: https://www.youtube.com/watch?v=5iGGvJn8K1U (check the first 3 min)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      inputs.clientName +
        " " +
        "has booked a table for" +
        " " +
        inputs.date +
        " " +
        "at" +
        " " +
        inputs.time
    );
  };

  // minimize HTML tags, return just the input
  const inputItem = data.map((item) => (
    <input
      className="input-fields"
      key={item.id}
      type={item.type}
      name={item.name}
      placeholder={item.placeholder}
      value={inputs.name}
      onChange={handleChange}
    />
  ));

  return (
    <div id="form">
      <form className="form-info" onSubmit={handleSubmit}>
        {inputItem}
        <input type="submit" value="Book a table" />
      </form>
    </div>
  );
}
