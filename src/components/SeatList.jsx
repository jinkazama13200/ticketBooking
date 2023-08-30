import React from "react";
import SeatItem from "./SeatItem";
import "../scss/_seatItem.scss";
import "../scss/_seatList.scss";
import { useSelector } from "react-redux";

export default function SeatList({ data }) {
  const ticket = useSelector((state) => {
    return state.ticket;
  });
  return (
    <div className="list">
      <h1 style={{ textAlign: "center" }} className="screen">
        Screen
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            const { seatItem } = value;
            return (
              <tr key={value.classes}>
                <td>
                  <span className="classes">{value.classes}</span>
                </td>
                {seatItem.map((item) => {
                  const isSelected = ticket.find(
                    (value) => value.id === item.id
                  );
                  return (
                    <SeatItem
                      key={item.id}
                      item={item}
                      isSelected={!!isSelected}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
