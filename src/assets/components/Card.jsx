import React from "react";
import { useContext } from "react";
import { UtentiContext } from "../stores/UtentiContex";


function Card({ nome, cognome, imgUrl }) {
  const placeholder = "https://via.placeholder.com/80x80.png?text=IMG"; // fallback immagine

  return (
    <div className="card shadow-sm" style={{ width: 320 }}>
      <div className="card-body d-flex align-items-center gap-3">
        <img
          src={imgUrl || placeholder}
          alt={`${nome} ${cognome}`}
          width={80}
          height={80}
          className="rounded-circle object-fit-cover"
          style={{ objectFit: "cover" }}
        />
        <div>
          <h5 className="card-title mb-1">
            {nome} {cognome}
          </h5>
          <p className="card-text text-muted mb-0">Profilo utente</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
