import React from "react";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
}) => {
  return (
    <div className="form-row">
      <span className="mendatary">*</span>
      <label htmlFor={name} className="form-label label_modify">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="form-control input_modify"
        required
      />
    </div>
  );
};

export default FormRow;
