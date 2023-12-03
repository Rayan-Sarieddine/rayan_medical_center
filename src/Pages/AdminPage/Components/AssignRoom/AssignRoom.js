import React, { useState } from "react";
import "./AssignRoom.css";
function AssignRoom() {
  const [showAssignRoomBody, setShowAssignRoomBody] = useState(false);
  const toggleAssignRoomBody = () => {
    setShowAssignRoomBody(!showAssignRoomBody);
  };

  return (
    <div className="assign-room">
      <div className="assign-room_header">
        <h3>Assign Patient to Room</h3>
        <div onClick={toggleAssignRoomBody}>&#9660;</div>
      </div>
      {showAssignRoomBody && ( // Renders the body if showBody is true
        <div className="assign-room_body">
          <div className="assign-room_box">
            <p>Assign:</p>
            <form>
              <div class="assign-room-input-group">
                <label for="room_patient_id">Room ID: </label>
                <input
                  type="text"
                  id="room_id"
                  name="room_id"
                  placeholder="Enter Room ID:"
                  required
                />
              </div>
              <div class="assign-room-input-group">
                <label for="room_patient_id">Patient ID: </label>
                <input
                  type="text"
                  id="room_patient_id"
                  name="room_patient_id"
                  placeholder="Enter Patient ID:"
                  required
                />
              </div>

              <button type="assign-room-submit">Assign</button>
              <p className="assign-room-warning"></p>
              <p className="assign-room-successful"></p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignRoom;
