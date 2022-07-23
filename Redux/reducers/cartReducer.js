let defaultState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};
let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Add to cart": {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState, " 👿");
      return newState;
    }
    default:
      return state;
  }
};
export default cartReducer;
