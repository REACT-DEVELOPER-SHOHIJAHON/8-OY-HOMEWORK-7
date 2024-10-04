
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<Product>) {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;


