import React from "react";

export default function TicketType() {
  return (
    <div className="type">
      <p>
        <span className="seatType bg-secondary"></span>Empty
      </p>
      <p>
        {" "}
        <span className="seatType bg-success"></span>Choosing
      </p>
      <p>
        {" "}
        <span className="seatType bg-danger"></span>Booked
      </p>
    </div>
  );
}
