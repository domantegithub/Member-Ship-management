const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const URI = process.env.CONNECTION;
const client = new MongoClient(URI);
const DB = "membership_management";
const usersCollection = "users";
const membershipsCollection = "memberships";

//Gauti duomenis
app.get("/memberships", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(membershipsCollection)
      .find()
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//Idedam duomenis
app.post("/memberships", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db(DB)
      .collection(membershipsCollection)
      .insertOne(req.body);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
