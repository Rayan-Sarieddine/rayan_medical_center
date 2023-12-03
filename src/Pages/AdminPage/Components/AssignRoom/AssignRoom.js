import React, { useState } from "react";
import "./AssignRoom.css";
import axios from "axios";
function AssignRoom() {
  const [showAssignRoomBody, setShowAssignRoomBody] = useState(false);
  const toggleAssignRoomBody = () => {
    setShowAssignRoomBody(!showAssignRoomBody);
  };

  const [updateRoomId, setUpdatedRoomId] = useState("");
  const [updatedPatientRId, setupdatedPatientRId] = useState("");
  const [updatePatientRMsg, setUpdatePatientRMsg] = useState("");
  const [updatePatientRError, setUpdatePatientRError] = useState("");

  function handleInputChange(e, type) {
    switch (type) {
      case "id":
        setupdatedPatientRId(e.target.value);
        break;
      case "room":
        setUpdatedRoomId(e.target.value);
        break;

      default:
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      room: updateRoomId,
      id: updatedPatientRId,
    };
    sendData(data);
  }
  function sendData(data) {
    axios
      .post("https://localhost/rayan_care/assignRoom.php", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.message === "patient Room updated") {
          setUpdatePatientRMsg("Assigned");
          reset();
        } else {
          setUpdatePatientRError(response.data.message);
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function reset() {
    setupdatedPatientRId("");
    setUpdatedRoomId("");

    setTimeout(() => {
      setUpdatePatientRMsg("");
      setUpdatePatientRError("");
    }, 3000);
  }
  return (
    <div className="assign-room">
      <div className="assign-room_header">
        <h3>Assign Patient to Room</h3>
        <div onClick={toggleAssignRoomBody}>&#9660;</div>
      </div>
      {showAssignRoomBody && (
        <div className="assign-room_body">
          <div className="assign-room_box">
            <p>Assign:</p>
            <form onSubmit={handleSubmit}>
              <div className="assign-room-input-group">
                <label htmlFor="room_patient_id">Room ID: </label>
                <input
                  type="text"
                  id="room_id"
                  name="room_id"
                  value={updateRoomId}
                  onChange={(e) => handleInputChange(e, "room")}
                  placeholder="Enter Room ID:"
                  required
                />
              </div>
              <div className="assign-room-input-group">
                <label htmlFor="room_patient_id">Patient ID: </label>
                <input
                  type="text"
                  id="room_patient_id"
                  value={updatedPatientRId}
                  onChange={(e) => handleInputChange(e, "id")}
                  name="room_patient_id"
                  placeholder="Enter Patient ID:"
                  required
                />
              </div>

              <button type="submit" className="assign-room-submit">
                Assign
              </button>
              <p className="assign-room-warning">{updatePatientRError}</p>
              <p className="assign-room-successful">{updatePatientRMsg}</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignRoom;
