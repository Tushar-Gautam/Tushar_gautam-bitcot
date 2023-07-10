function AddProductFormRow({ type, name, value, handleChange, labelText }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>
          <span className="text-danger">*</span> {labelText}
        </label>
        <input
          type={type}
          name={name}
          className="form-control"
          id="productName"
          value={value}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}

export default AddProductFormRow;
