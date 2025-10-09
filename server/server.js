import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/ProgettoReact")
  .then(() => {
    console.log("connesso al db!");
  })
  .catch((err) => {
    console.log("impossibile connettersi al db!", err);
  });

const schema = new mongoose.Schema({
  nome: String,
  cognome: String,
  URL: String,
  Coglione: Boolean,
});

const Model = mongoose.model("utenti", schema);

const inserUser = async (obj) => {
  const user = new Model(obj);

  await user.save();
};

/* SCRITTURA SU DB E LETTURA
const leggiUtenti = async () => {
    try {
        const utenti = await Model.find({});
        console.log("Utenti trovati:", utenti);
    } catch (err) {
        console.error("Errore nella lettura utenti:", err);
    }
}

const main = async () => {
    await inserUser({
        name: 'prov2',
        cognome: '',
        imgURL: '',
        isCoglione: true
    });
    await leggiUtenti();
}


 main(); */

const Form = mongoose.model("Utenti", schema);

// Endpoint per ricevere dati dal form
app.post("/api/forms", async (req, res) => {
  try {
    console.log("ricevuto:", req.body); // << utile per debug!
    const formData = new Form(req.body);
    const savedData = await formData.save();
    res.status(201).json(savedData);
    console.log("fatto");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/utenti", async (req, res) => {
  try {
    const users = await Form.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Avvio server
app.listen(5000, () => console.log("Server avviato sulla porta 5000"));
