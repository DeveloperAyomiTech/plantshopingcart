// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [], // Array to hold cart items
};

// Create a slice of the Redux store
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItem(state, action) {
      const newItem = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        // If item exists, just update the quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // Otherwise, add the new item to the cart
        state.items.push(newItem);
      }
    },
    // Action to remove an item from the cart
    removeItem(state, action) {
      const itemId = action.payload;
      // Filter out the item with the given id
      state.items = state.items.filter(item => item.id !== itemId);
    },
    // Action to update the quantity of an existing item
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      // Find the item by id
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        // Update the quantity if the item exists
        existingItem.quantity = quantity;
      }
    },
  },
});

// Export the actions for use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
