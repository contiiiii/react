import { UtentiContext } from "./assets/stores/UtentiContex";
import { useContext } from "react";
import { useState } from "react";
import Card from "./assets/components/Card";
import Navbar from "./assets/components/NavBar";

function App() {
  const [DatiUtenti, setDatiUtenti] = useState([]);
  console.log(DatiUtenti)

  return (
    <UtentiContext.Provider value={{ DatiUtenti, setDatiUtenti }}>
      <Navbar></Navbar>
      {DatiUtenti.map((utente) => {
        <Card
          key={Math.random()*100}
          nome={utente.nome}
          cognome={utente.cognome}
          imgUrl={utente.URL}
        ></Card>;
      })}
    </UtentiContext.Provider>
  );
}

export default App;
