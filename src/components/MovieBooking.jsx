import React from "react";
import SeatList from "./SeatList";
import TicketForm from "./TicketForm";
import data from "../data/data.json";

export default function MovieBooking() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-8">
          <SeatList data={data} />
        </div>
        <div className="col-4">
          <TicketForm />
        </div>
      </div>
    </div>
  );
}
