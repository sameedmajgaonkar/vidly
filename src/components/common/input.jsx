import React from "react";
// label value onChange
// Spread Operator (...rest):When you spread the rest object onto the input element,
// you're essentially taking each key-value pair from the rest object and passing them
// as individual props to the input element.
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
