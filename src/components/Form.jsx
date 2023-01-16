import React, { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(inputs.username + inputs.email + inputs.date + inputs.time);
  };

  return (
    <div id="form">
      <form className="form-info" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Full name"
          value={inputs.username || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={inputs.date || ""}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={inputs.time || ""}
          onChange={handleChange}
        />
        <input type="submit" value="Book a table" />
      </form>
    </div>
  );
}
