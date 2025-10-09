import { UtentiContext } from "./assets/stores/UtentiContex";
import { useContext, useEffect, useState } from "react";
import Card from "./assets/components/Card";
import Navbar from "./assets/components/NavBar";
import axios from "axios";

function App() {
  const { DatiUtenti, setDatiUtenti } = useContext(UtentiContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/utenti")
      .then((response) => setDatiUtenti(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      {DatiUtenti.map((utente) => (
        <Card
          key={Math.random() * 100}
          nome={utente.nome}
          cognome={utente.cognome}
          imgUrl={utente.URL}
          isCoglione={utente.Coglione}
        />
      ))}
    </>
  );
}

export default App;
