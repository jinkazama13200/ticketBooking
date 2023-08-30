import React from "react";
import "../scss/_formTicket.scss";
import currencyFormat from "../currencyFormat";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTicket } from "../redux/actions/selectedTicket";

export default function TicketForm() {
  const ticket = useSelector((state) => {
    return state.ticket;
  });
  const totalPrice = ticket.reduce((result, value) => {
    return result + value.price;
  }, 0);
  const dispatch = useDispatch();
  const handleRemove = (itemId) => {
    dispatch(removeTicket(itemId));
  };
  const handleSuccess = () => {
    const empty = [];
    dispatch({ type: "success", currency: totalPrice, empty: empty });
  };
  return (
    <div className="formTicket">
      <div className="formHeader">
        <p className="title">Your Ticket</p>
      </div>
      <div className="formBody">
        {ticket.length == 0 ? (
          <p style={{ marginTop: "100px" }} className="text-center text-muted">
            Choose a Position
          </p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Price</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {ticket.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{currencyFormat(value.price)}</td>
                    <td>
                      <span
                        onClick={() => handleRemove(value.id)}
                        className="removeIcon"
                      >
                        X
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="formFooter">
        <p>Total: {currencyFormat(totalPrice)}</p>
        <button onClick={handleSuccess} className="btn btn-dark w-100">
          Book
        </button>
      </div>
    </div>
  );
}
