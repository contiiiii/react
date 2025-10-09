import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const schema = new mongoose.Schema({
  nome: String,
  cognome: String,
  URL: String,
  Coglione: Boolean
});

const User = mongoose.models.Utenti || mongoose.model("Utenti", schema);

let conn = null;

async function connectToDatabase() {
  if (conn) return conn;
  conn = await mongoose.connect(uri);
  return conn;
}

export async function handler(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  // Gestione preflight CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Sostituisci con il dominio del frontend in produzione
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: "Method Not Allowed",
    };
  }

  try {
    await connectToDatabase();
    const users = await User.find();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: error.message }),
    };
  }
}
