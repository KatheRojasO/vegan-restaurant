import React, { useState } from "react";
import data from "../jsonFiles/form.json";

export default function Form() {
  const [inputs, setInputs] = useState({});

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

  const inputItem = data.map((item) => (
    <li className="input-fields" key={item.id}>
      <input
        type={item.type}
        name={item.name}
        placeholder={item.placeholder}
        value={inputs.name}
        onChange={handleChange}
      />
    </li>
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
