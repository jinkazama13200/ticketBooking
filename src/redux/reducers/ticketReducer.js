import currencyFormat from "../../currencyFormat";

export const ticketReducer = (state = [], action) => {
  switch (action.type) {
    case "selected": {
      const { isSelected, ...item } = action.payload;
      if (isSelected) {
        return [...state, { ...item }];
      }
      return state.filter((value) => value.id !== item.id);
    }
    case "removeTicket": {
      return state.filter((value) => value.id !== action.payload);
    }
    case "success": {
      const { totalPrice } = action.payload;
      const randomNumber = Math.floor(Math.random() * 1e3);
      if (state.length > 0) {
        alert(
          `Successfully Booking \nYour total Price: ${currencyFormat(
            totalPrice
          )}\nYour Order Is #${randomNumber}\nThank you!!!!`
        );
        return action.empty;
      } else {
        alert(
          "Can't book because still not have any ticket,please choose one and click book"
        );
      }
    }
    default: {
      return state;
    }
  }
};
