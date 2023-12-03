import React, { useState } from "react";
import "./ViewRooms.css";
function ViewRooms({ allRooms }) {
  const [showViewRoomsBody, setShowViewRoomsBody] = useState(false);
  const toggleViewRoomsBody = () => {
    setShowViewRoomsBody(!showViewRoomsBody);
  };
  return (
    <div className="all-rooms">
      <div className="all-rooms_header">
        <h3>All Rooms</h3>
        <div onClick={toggleViewRoomsBody}>&#9660;</div>
      </div>
      {showViewRoomsBody && (
        <div className="all-rooms_body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Number</th>
                <th>Floor</th>
                <th>Capacity</th>
                {/* <th>Patients</th> */}
              </tr>
            </thead>
            <tbody>
              {allRooms.map((rm) => {
                return (
                  <tr
                    key={rm.room_id}
                    // className={
                    //   rm.capacity > rm.room_patients.length ? "green" : "red"
                    // }
                  >
                    <td>{rm.room_id}</td>
                    <td>{rm.room_number}</td>
                    <td>{rm.floor}</td>
                    <td>{rm.capacity}</td>
                    {/* <td>{rm.room_patients.join(", ")}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewRooms;
