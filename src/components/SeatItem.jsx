import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { selectedTicket } from "../redux/actions/ticketActions";
import "../scss/_seatItem.scss";

export default function SeatItem({ item, isSelected }) {
  const btnRef = useRef();
  const dispatch = useDispatch();
  const handleSelected = () => {
    const payload = { ...item, isSelected: !isSelected };
    dispatch(selectedTicket(payload));
  };
  const { isBooked } = item;
  let selectedSeat = "seatId m-2";
  if (isBooked) {
    selectedSeat += " bg-danger";
  } else if (isSelected) {
    selectedSeat += " bg-success";
  } else {
    selectedSeat += " bg-secondary";
  }
  return (
    <td className="seatItem">
      <p onClick={() => btnRef.current.click()} className={selectedSeat}>
        {item.id}
      </p>
      <button
        ref={btnRef}
        hidden
        onClick={handleSelected}
        className={selectedSeat}
        disabled={isBooked}
      ></button>
    </td>
  );
}
