import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ProgettoReact')
.then(()=>{
    console.log("connesso al db!");
}).catch((err)=>{
    console.log("impossibile connettersi al db!", err);
})

const schema = new mongoose.Schema({
    name: String,
    cognome: String,
    imgURL: String,
    isCoglione: String,
});

const Model = mongoose.model('utenti',schema);

const inserUser = async(obj)=>{
    const user = new Model(obj)

    await user.save();
}


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
        cognome: 'tua mamma',
        imgURL: '',
        isCoglione: true
    });
    await leggiUtenti();
}


 main();