import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "@/helpers/redux-app/store";
// import { Action, ThunkAction } from "@reduxjs/toolkit";

// All of the RTK types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
