import React from 'react';
import '../styles/createVCardPage.css';

const CreateVCardPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-white text-center mb-4">Create Your VCard</h2>
      <div className="bg-dark text-light p-4 rounded">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="https://vcards.infyom.com/marlonbrasil"
  
        />
        <button className="btn-custom">Add to Contact</button>
      </div>
    </div>
  );
};

export default CreateVCardPage;
