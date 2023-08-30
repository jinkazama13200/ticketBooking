import { configureStore } from "@reduxjs/toolkit";
import { ticketReducer } from "./redux/reducers/ticketReducer";

const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

export default store;
