import Cart from "../../pages/customer/cart";

export const Add = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

//Remove from Cart
export const Delete = (p_id) => {
  return {
    type: "DELETE_CART",
    payload: p_id,
  };
};

//Remove individual item
export const Remove = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};

//Remove individual item
export const ClearCart = (state) => {
  return {
    type: "CLEAR_CART",
    payload: state,
  };
};
