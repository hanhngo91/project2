const initialState = [];
console.log(initialState);
const productReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "PRODUCTS":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default productReducer;
