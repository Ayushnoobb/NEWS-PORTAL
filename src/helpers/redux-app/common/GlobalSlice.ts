import { createSlice } from "@reduxjs/toolkit";

//////////////////////////////
// Schema
//////////////////////////////
type ISchema = {
  // Layouts
  layouts: {
    menu: {
      is_mobile_menu: boolean;
    };
  };
};

//////////////////////////////
// Initial state
//////////////////////////////
const initialState: ISchema = {
  layouts: {
    menu: {
      is_mobile_menu: false,
    },
  },
};

//////////////////////////////
// Main slice
//////////////////////////////
export const GlobalSlice = createSlice({
  name: "common/GlobalSlice",
  initialState,
  reducers: {
    // Layouts
    setMobileNavPopuup: (state, action) => {
      state.layouts.menu.is_mobile_menu = action.payload;
    },
  },
});
