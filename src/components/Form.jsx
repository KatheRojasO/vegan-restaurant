import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import data from "../jsonFiles/form.json";

export default function Form() {
  const [inputs, setInputs] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const form = useRef();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => setFormSubmit(true),
        (error) => alert("sorry,your booking has failed")
      );
    event.target.reset();
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
      <form className="form-info" ref={form} onSubmit={handleSubmit}>
        {inputItem}
        <input type="submit" value="Book a table" />
        {formSubmit && "Thank you for contacting us! "}
      </form>
    </div>
  );
}
