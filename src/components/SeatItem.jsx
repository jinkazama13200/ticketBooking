import React from "react";
import { useDispatch } from "react-redux";
import { selectedTicket } from "../redux/actions/selectedTicket";

export default function SeatItem({ item, isSelected }) {
  const dispatch = useDispatch();
  const handleSelected = () => {
    const payload = { ...item, isSelected: !isSelected };
    dispatch(selectedTicket(payload));
  };
  const { isBooked } = item;
  let selectedSeat = "btn";
  if (isBooked) {
    selectedSeat += " btn-danger";
  } else if (isSelected) {
    selectedSeat += " btn-success";
  } else {
    selectedSeat += " btn-secondary";
  }
  return (
    <td className="seatItem">
      <button
        onClick={handleSelected}
        className={selectedSeat}
        disabled={isBooked}
      >
        {item.id}
      </button>
    </td>
  );
}
