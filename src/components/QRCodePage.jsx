import React from "react";
import "../styles/QRCode.css";
import profilePic from "../assets/images/profile-pic.jpg";
import qrcode from "../assets/images/qrcode.jpg";
const App = () => {
  return (
    <div className="qr-code-container ">
      <div className="justify-content-center"><h1 className="card-title mb-4">QR Code</h1></div>
      <div className="card text-center p-7">
        
        <div className="profile-image mb-3">
          <img
            src={profilePic}
            alt="Profile"
            className="curved-rectangle"
          />
        </div>
        <div className="qr-code mb-4">
          <img
            src={qrcode} 
            alt="QR Code"
            className="img-fluid"
          />
        </div>
        <button className="btn btn-warning fw-bold">
          Download My QR Code
        </button>
      </div>
    </div>
  );
};

export default App;
