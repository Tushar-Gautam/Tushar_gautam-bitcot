const reducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_ALL_PRODUCTS": {
      return {
        ...state,
        products: action.payload.data,
        categories: action.payload.categories,
      };
    }
    case "DELETE": {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    }
    case "Filter_CATEGORY": {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.category === action.payload
        ),
      };
    }
    case "SEARCH_PRODUCT": {
      return {
        ...state,
        products: state.products.filter((product) => {
          return product.productName
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    }
    case "ADD_NEW_PRODUCT": {
      if (action.payload.isEditingFlag) {
        const updatedProducts = state.products.map((product) => {
          if (product.id === action.payload.payload.id) {
            return { ...product, ...action.payload.payload };
          }
          return product;
        });
        state.products = updatedProducts;
        return state;
      }
      state.products.push(action.payload.payload);
      return state;
    }
  }
};
export default reducer;
