import React from 'react';
import '../styles/businessHours.css'; 

const BusinessHours = () => {
  const hours = [
    { day: 'Monday', open: '9:00 AM', close: '5:00 PM' },
    { day: 'Tuesday', open: '9:00 AM', close: '5:00 PM' },
    { day: 'Wednesday', open: '9:00 AM', close: '5:00 PM' },
    { day: 'Thursday', open: '9:00 AM', close: '5:00 PM' },
    { day: 'Friday', open: '9:00 AM', close: '5:00 PM' },
    { day: 'Saturday', open: '10:00 AM', close: '2:00 PM' },
    { day: 'Sunday', open: 'Closed', close: '' },
  ];

  return (
    
    <div className="business-hours-container">
      <h1>Business Hours</h1>
      <table className="tableh table-bordered mt-3">
        <thead>
          <tr>
            <th>Day</th>
            <th>Opening Time</th>
            <th>Closing Time</th>
          </tr>
        </thead>
        <tbody>
  {hours.map((hour, index) => (
    <tr key={index}>
      <td>{hour.day}</td>
      {hour.open === 'Closed' ? (
        <td colSpan="2" className="closed">{hour.open}</td>
      ) : (
        <>
          <td>{hour.open}</td>
          <td>{hour.close}</td>
        </>
      )}
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default BusinessHours;
