import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: string[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
    clearItem: (state, action: PayloadAction<string>) => {
      state.items.slice(1, 2);
    },
    clearAllItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearItem, clearAllItem } = cartSlice.actions;
export default cartSlice.reducer;
