import React, { useState } from "react";
import '../styles/makeAppointment.css'; 
const MakeAppointment = () => {
  const [selectedHour, setSelectedHour] = useState("");

  const handleAppointment = () => {
    if (!selectedHour) {
      alert("Please select an hour!");
    } else {
      console.log("Appointment made for:", selectedHour);
    }
  };

  const hours = ["8:10 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "1:30 - 3:00"];

  return (
    <div className="container mt-5">
      <h2 className="text-white text-center mb-4">Make an Appointment</h2>
      <div className="mb-4">
        <label htmlFor="date" className="form-label text-white">
          Date:
        </label>
        <div className="mx-5 pt-md-7 mx-md-5 mx-lg-7">
          <input
            type="date"
            id="date"
            className="form-input form-control text-white"
            
            aria-label="Select a date"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label text-white">Hour:</label>
        <div className="row mx-5">
          {hours.map((hour, index) => (
            <div className="col-6 mb-2" key={index}>
              <button
                className={`btn ${
                  selectedHour === hour ? "btn-warning" : "btn-dark"
                } w-100`}
                onClick={() => setSelectedHour(hour)}
                aria-pressed={selectedHour === hour}
              >
                {hour}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 pt-4 justify-content-center">
        <button type="submit" className="btn-custom" onClick={handleAppointment}>
          Make an Appointment
        </button>
      </div>
    </div>
  );
};

export default MakeAppointment;
