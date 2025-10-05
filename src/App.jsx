import { UtentiContext } from "./assets/stores/UtentiContex";
import { useContext, useState } from "react";
import Card from "./assets/components/Card";
import Navbar from "./assets/components/NavBar";

function App() {
  const { DatiUtenti, setDatiUtenti } = useContext(UtentiContext);

  return (
    <>
      <Navbar />
      {DatiUtenti.map((utente) => (
        <Card
          key={Math.random()*100}
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

