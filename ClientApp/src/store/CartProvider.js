import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // Calculate total price
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    // Find existing item index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // Get that existing item
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems = [...state.items];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = updatedItems.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    // Find existing item index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // Get that existing item
    const existingCartItem = state.items[existingCartItemIndex];

    // Calculate total price
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems = [...state.items];
    if (existingCartItem.amount === 1) {
      updatedItems = updatedItems.filter(
        (item) => item.id !== existingCartItem.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const removeAllItems = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
    clearCartItems: removeAllItems,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
