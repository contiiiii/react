import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UtentiContext } from "../stores/UtentiContex";
import Navbar from "./NavBar";
import axios from "axios";


function Form() {
  const { DatiUtenti, setDatiUtenti } = useContext(UtentiContext);

  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    URL: "",
    Coglione: false,
  });

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  }

  async function handlesubmit (e) {
    e.preventDefault();
    

  try {
    const response = await axios.post("http://localhost:5000/api/forms", formData);
    console.log("Risposta dal server:", response.data);
  } catch (error) {
    console.error("Errore POST:", error);
  }

    setFormData({
      nome: "",
      cognome: "",
      URL: "",
      Coglione: false,
    });
  }



  return (
    <>
    <Navbar />
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <form
        className="p-4 rounded shadow-lg bg-secondary text-light"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="mb-4 text-center">Registrazione</h2>

        {/* Nome */}
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control bg-dark text-light border-0"
            id="nome"
            name="nome"
            placeholder="Inserisci il tuo nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </div>

        {/* Cognome */}
        <div className="mb-3">
          <label htmlFor="cognome" className="form-label">
            Cognome
          </label>
          <input
            type="text"
            className="form-control bg-dark text-light border-0"
            id="cognome"
            name="cognome"
            placeholder="Inserisci il tuo cognome"
            value={formData.cognome}
            onChange={handleInputChange}
          />
        </div>

        {/* URL */}
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            URL personale
          </label>
          <input
            type="url"
            name="URL"
            className="form-control bg-dark text-light border-0"
            id="url"
            placeholder="https://esempio.com"
            value={formData.URL}
            onChange={handleInputChange}
          />
        </div>

        {/* Checkbox */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
            name="Coglione"
            checked={formData.Coglione}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="terms">
            Sono un coglione?
          </label>
        </div>

        {/* Bottone */}
        <button onClick={handlesubmit} className="btn btn-primary w-100">
          Invia
        </button>
      </form>
    </div>
    </>
    
  );
}

export default Form;
