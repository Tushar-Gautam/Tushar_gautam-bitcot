import { useState } from "react";
import { useGlobalContext } from "../../context";
import { AddProductHeader, SingleProduct } from "../../components";
import { NavLink } from "react-router-dom";

function AddProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, categories, filterCategories, searchProducts } =
    useGlobalContext();

  const handleChange = (e) => {
    const inputVal = e.target.value;
    setSearchTerm(inputVal);
    searchProducts(inputVal);
  };
  return (
    <div className="content-area-wrapper">
      <div className="content-wrapper">
        <div className="filter_wrapper  d-block d-sm-none">
          <div className="filet_left_content">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <img src="images/icons/magnifying-glass.png" alt="search" />
                </span>
              </div>
              <input
                type="text"
                className="form-control input_modify"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="heading_wrapper d-flex flex-wrap">
          <h1 className="head_title">Product List</h1>
          <nav aria-label="breadcrumb" className="breadcrumb_wrapper">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">E-Commerce</li>
              <li className="breadcrumb-item active" aria-current="page">
                Product List
              </li>
            </ul>
          </nav>
        </div>
        <div className="card products_blc">
          <div className="card-body">
            <div className="filter_wrapper">
              <div className="filet_left_content">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII="
                        alt="search"
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control input_modify"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </div>
                <select
                  className="custom-select input_modify"
                  onChange={filterCategories}
                >
                  <option>All</option>
                  {categories.map((category, index) => {
                    return (
                      <option value={category} key={index}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="filter_btn_wrapper">
                <NavLink
                  to={"/add-product"}
                  className="btn theme-btn-primary theme-btn"
                >
                  {" "}
                  Add Product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="app_table table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <label className="checkbox_container text-uppercase">
                    {" "}
                    ID
                  </label>
                </th>
                <AddProductHeader headingText={"Products"} />
                <AddProductHeader headingText={"Category"} />
                <AddProductHeader headingText={"Price"} />
                <AddProductHeader headingText={"Stock"} />
                <AddProductHeader headingText={"Status"} />
                <AddProductHeader headingText={"Action"} />
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <SingleProduct
                    key={product.id + product.productName}
                    {...product}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
