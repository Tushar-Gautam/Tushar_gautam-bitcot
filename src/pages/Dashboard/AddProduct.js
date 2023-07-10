import { useState } from "react";
import AddProductTab from "../../components/AddProductTab";
import { AddVarians, GeneralInfo } from "../../components";
import { useGlobalContext } from "../../context";
import { useParams } from "react-router-dom";

function AddProduct() {
  const { id } = useParams();
  const { addNewProduct, products } = useGlobalContext();
  const [activeTab, setActiveTab] = useState(true);

  const productDetails = products.filter((product) => {
    return product.id === id;
  })[0];

  const initialProductObj = {
    id: id ? id : products.length + 1,
    productName: productDetails?.productName ?? "",
    description: productDetails?.description ?? "",
    price: productDetails?.variation[0]?.price ?? "",
    productImage:
      productDetails?.variation[0]?.productImage ??
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Dress_Shirt_Fitting_on_dummy_Front.JPG",
    comparePrice: "",
    costPerItem: "",
    taxRate: "",
    category: productDetails?.category ?? "",
    tags: "",
  };

  const [values, setValues] = useState(initialProductObj);

  const initialState = {
    variant: "",
    variantPrice: "",
    stock: "",
  };
  const [variationForm, setVariationForm] = useState([
    initialState,
    initialState,
  ]);

  const handleAddForm = () => {
    setVariationForm([...variationForm, initialState]);
  };

  const handleVariantChange = (index, e) => {
    const name = e.target.name;
    const value = e.target.value;

    const updatedForms = [...variationForm];
    updatedForms[index] = { ...updatedForms[index], [name]: value };
    setVariationForm(updatedForms);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const changeActive = (title) => {
    return title === "general" ? setActiveTab(true) : setActiveTab(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    variationForm.forEach((form) => {
      /* eslint-disable no-unused-vars */
      for (const [_, value] of Object.entries(form)) {
        if (value === "") {
          return alert("Please Fill all fields in variants");
        }
      }
      /* eslint-enable no-unused-vars */
    });
    if (
      values.productName === "" ||
      values.description === "" ||
      values.price === "" ||
      values.comparePrice === "" ||
      values.costPerItem === "" ||
      values.taxRate === "" ||
      values.category === "select" ||
      values.tags === "select"
    ) {
      return alert("Please fill all the categories");
    }
    const isEditing = id ? true : false;
    addNewProduct(values, variationForm, isEditing);
    alert(id ? "Product Edited successfully" : "Product Added successfully");
  };

  return (
    <>
      <div className="card nav_pills_card nav_pills_card_new">
        <div className="card-body">
          <div className="heading_wrapper heading_right_content">
            <h1 className="head_title">
              {id ? "Edit Product" : "Add Product"}
            </h1>
            <div className="btn_wrapper">
              <button type="button" className="theme-btn btn-outline-secondary">
                Discard
              </button>
              <button
                type="button"
                className="theme-btn theme-btn-primary"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
          <ul
            className="nav nav-pills mb-0 nav_pills_wrapper"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <AddProductTab
                title={"General"}
                isActive={activeTab}
                selectTab={() => changeActive("general")}
              />
            </li>
            <li className="nav-item" role="presentation">
              <AddProductTab
                title={"Variation"}
                isActive={!activeTab}
                selectTab={() => changeActive("variation")}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade ${activeTab ? "active show" : null}`}
          id="pills-general"
          role="tabpanel"
          aria-labelledby="pills-general-tab"
        >
          <GeneralInfo values={values} handleChange={handleChange} />
        </div>
        <div
          className={`tab-pane fade ${!activeTab ? "active show" : null}`}
          id="pills-variation"
          role="tabpanel"
          aria-labelledby="pills-variation-tab"
        >
          <div className="card nav_pills_card">
            <div className="card-body">
              <div>
                <div className="form-title">Variants</div>
                <p>
                  Add A Custome Variat Options For Your Product, Like Different
                  Sizes Or Colors.
                </p>
                {variationForm.map((form, idx) => (
                  <div className="isMinus" key={idx}>
                    <AddVarians
                      values={form}
                      handleChange={(e) => handleVariantChange(idx, e)}
                    />
                  </div>
                ))}

                <button
                  className="uploader-add-btne"
                  type="button"
                  onClick={handleAddForm}
                >
                  Add field
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
