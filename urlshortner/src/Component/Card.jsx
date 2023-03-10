import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card-item">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1584/1584942.png"
          alt="fast"
          width="50%"
        />
        <h2>Fast</h2>
      </div>
      <div className="card-item">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1017/1017466.png"
          alt="Short"
          width="50%"
        />
        <h2>Short Link</h2>
      </div>
      <div className="card-item">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7298/7298442.png"
          width="50%"
          alt=""
        />
        <h2>Reusable</h2>
      </div>
    </div>
  );
}

export default Card;
