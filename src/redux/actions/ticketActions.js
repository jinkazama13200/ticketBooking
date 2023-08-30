export const selectedTicket = (ticket) => {
  return {
    type: "selected",
    payload: ticket,
  };
};

export const removeTicket = (ticketId) => {
  return {
    type: "removeTicket",
    payload: ticketId,
  };
};
