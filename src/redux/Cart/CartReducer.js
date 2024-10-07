import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  updatedCartList: [],
  fetchAddress: {},
  cartTotal: 0,
};

const CartReducer = createSlice({
  name: "cartreducer",
  initialState,
  reducers: {
    resetToInitialState(state) {
      return initialState;
    },
    setCartList: (state, action) => {
      state.cartList.push(action.payload);
    },
    setAddressForList: (state, action) => {
      state.fetchAddress = action.payload;
    },
    setCartTotal: (state, action) => {
      console.log("action.payload", action.payload);
      state.cartTotal = action.payload;
    },
    setUpdatedCartList: (state, action) => {
      const itemToUpdate = action.payload; // The new item passed
      const existingItemIndex = state.cartList.findIndex(
        (item) => item.id === itemToUpdate.id // Assuming each item has a unique 'id'
      );

      if (existingItemIndex >= 0) {
        // If the item already exists, update its quantity
        state.cartList[existingItemIndex].givenQuantity += 1;
        state.cartList[existingItemIndex].displayPrice =
          state.cartList[existingItemIndex].givenQuantity *
          state.cartList[existingItemIndex].price_net;
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        state.cartList.push({
          ...itemToUpdate,
          givenQuantity: 1,
          displayPrice: itemToUpdate?.price_net,
        });
      }

      // Optionally, update any other state if needed
      console.log("Updated cart list:", state.cartList);
    },

    setDecreaseQuantity: (state, action) => {
      const itemToUpdate = action.payload; // The new item passed
      const existingItemIndex = state.cartList.findIndex(
        (item) => item.id === itemToUpdate.id // Assuming each item has a unique 'id'
      );

      if (existingItemIndex >= 0) {
        // If the item already exists, update its quantity
        state.cartList[existingItemIndex].givenQuantity -= 1;
        state.cartList[existingItemIndex].displayPrice =
          state.cartList[existingItemIndex].givenQuantity *
          state.cartList[existingItemIndex].price_net;

        if (state.cartList[existingItemIndex].givenQuantity == 0) {
          state.cartList.splice(existingItemIndex, 1);
        }
      }

      // Optionally, update any other state if needed
      console.log("Updated cart list:", state.cartList);
    },
  },
});

export const {
  setCartList,
  setAddressForList,
  setCartTotal,
  setDecreaseQuantity,
  setUpdatedCartList,
  resetToInitialState,
} = CartReducer.actions;

export const cartDataSliceReducer = CartReducer.reducer;