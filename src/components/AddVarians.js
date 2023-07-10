import { useState } from "react";
import AddProductFormRow from "./AddProductFormRow";
import productPic from "../assets/images/thumbnails/picture.svg";

function AddVarians({ values, handleChange }) {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <AddProductFormRow
            type={"text"}
            name={"variant"}
            value={values.variant}
            handleChange={handleChange}
            labelText={"Variant"}
          />
        </div>
        <div className="col-md-4">
          <AddProductFormRow
            type={"text"}
            name={"variantPrice"}
            value={values.variantPrice}
            handleChange={handleChange}
            labelText={"Price"}
          />
        </div>
        <div className="col-md-4">
          <AddProductFormRow
            type={"text"}
            name={"stock"}
            value={values.stock}
            handleChange={handleChange}
            labelText={"Stock keeping unit"}
          />
        </div>
      </div>

      <div className="form-group uploader-wrapper">
        <label htmlFor="Description">
          <span className="text-danger">*</span> Upload Image
        </label>
        <div className="uploader-wrapper-inner">
          <img src={productPic} alt="pictures" />
          <input type="file" />
          Click or drag file to upload
        </div>
      </div>
    </>
  );
}

export default AddVarians;
