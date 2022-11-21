const INIT_STATAE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATAE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.p_id === action.payload.p_id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].p_qty += 1;
      } else {
        const temp = { ...action.payload, p_qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "DELETE_CART":
      console.log("Action id = " + action.payload);
      const data = state.carts.filter((el) => el.p_id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "REMOVE_ITEM":
      const itemIndex_dec = state.carts.findIndex(
        (item) => item.p_id === action.payload.p_id
      );
      if (state.carts[itemIndex_dec].p_qty >= 1) {
        const deleteItem = (state.carts[itemIndex_dec].p_qty -= 1);
      } else if (state.carts[itemIndex_dec].p_qty === 1) {
        const data = state.carts.filter((el) => el.p_id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
      return {
        ...state,
        carts: [...state.carts],
      };
    case "CLEAR_CART":
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};
