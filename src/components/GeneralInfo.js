// import { useState } from "react";
import AddProductFormRow from "./AddProductFormRow";

function GeneralInfo({ values, handleChange }) {
  return (
    <>
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Basic Info</div>
            <AddProductFormRow
              type={"name"}
              name={"productName"}
              value={values.productName}
              handleChange={handleChange}
              labelText={"Product Name"}
            />

            <div className="form-group">
              <label htmlFor="Description">
                <span className="text-danger">*</span>
                Description
              </label>
              <textarea
                type="text"
                id="Description"
                className="form-control"
                name="description"
                value={values.description}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Pricing</div>
            <div className="row">
              <div className="col-md-6">
                <AddProductFormRow
                  type={"text"}
                  name={"price"}
                  value={values.price}
                  handleChange={handleChange}
                  labelText={"Price"}
                />
              </div>
              <div className="col-md-6">
                <AddProductFormRow
                  type={"text"}
                  name={"comparePrice"}
                  value={values.comparePrice}
                  handleChange={handleChange}
                  labelText={"Compare Price"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <AddProductFormRow
                  type={"text"}
                  name={"costPerItem"}
                  value={values.costPerItem}
                  handleChange={handleChange}
                  labelText={"Cost per item"}
                />
              </div>
              <div className="col-md-6">
                <AddProductFormRow
                  type={"text"}
                  name={"taxRate"}
                  value={values.taxRate}
                  handleChange={handleChange}
                  labelText={"Tax Rate"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Organization</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="productName">Category</label>
                  <select
                    className="form-control"
                    id="productName"
                    onChange={handleChange}
                    name={"category"}
                  >
                    <option value="select">Select</option>
                    <option value="cloths">Cloths</option>
                    <option value="bags">Bags</option>
                    <option value="shoes">Shoes</option>
                    <option value="watches">Watches</option>
                    <option value="devices">Devices</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="tags">Tags</label>
                  <select
                    className="form-control"
                    id="productName"
                    onChange={handleChange}
                    name={"tags"}
                  >
                    <option value="select">Select</option>
                    <option value="cotton">Cotton</option>
                    <option value="nike">Nike</option>
                    <option value="sales">Sales</option>
                    <option value="sports">Sports</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="toys">Toys</option>
                    <option value="hobbies">Hobbies</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralInfo;
