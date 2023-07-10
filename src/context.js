import React, { useState, useContext, useReducer, useEffect } from "react";
import data from "./data.json";
import AddProductReducer from "./Reducers/allProductsReducer";

const AppContext = React.createContext();

const initialState = {
  products: [],
  total: 0,
  amount: 0,
  categories: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AddProductReducer, initialState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  let isEditing = false;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const deleteProduct = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const filterCategories = (e) => {
    const category = e.target.value;
    if (category === "All") {
      return fetchData();
    }
    fetchData();
    dispatch({ type: "Filter_CATEGORY", payload: category });
  };

  const searchProducts = (keyword) => {
    fetchData();
    dispatch({ type: "SEARCH_PRODUCT", payload: keyword });
  };

  const addNewProduct = (productDetails, variants, isEditingFlag) => {
    let payload = {};
    payload = {
      id: "" + productDetails.id,
      productName: productDetails.productName,
      productImage: productDetails.productImage,
      category: productDetails.category,
      status: "",
      description: productDetails.description,
      variation: [],
    };
    variants.forEach((variant) => {
      const obj = {
        variant: variant.variant,
        productImage: productDetails.productImage,
        price: variant.variantPrice,
        stock: variant.stock,
      };
      payload.variation.push(obj);
    });
    isEditing = isEditingFlag;
    payload.status =
      payload.variation[0].stock > 0 ? "In Stock" : "out of stock";
    dispatch({
      type: "ADD_NEW_PRODUCT",
      payload: { payload, isEditingFlag },
    });
  };

  const fetchData = () => {
    const set = new Set();
    data.forEach((item) => {
      return set.add(item.category);
    });

    const categories = [...set];
    dispatch({
      type: "DISPLAY_ALL_PRODUCTS",
      payload: { data: isEditing ? state.products : data, categories },
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        isSidebarOpen,
        toggleSidebar,
        deleteProduct,
        filterCategories,
        searchProducts,
        addNewProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
