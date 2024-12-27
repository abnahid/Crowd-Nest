require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.POET || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.CROWD_NEST_USER}:${process.env.CROWD_NEST_USER_PASS}@cluster0.cx0gq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    // await client.connect();

    // Collection database
    const database = client.db("CrowdNestDB");
    const campaignCollection = database.collection("Campaigns");

    // Add a new user
    app.post("/campaigns", async (req, res) => {
      const use = req.body;
      const result = await campaignCollection.insertOne(use);
      res.send(result);
    });

    // Get all users
    app.get("/campaigns", async (req, res) => {
      const result = await campaignCollection.find().toArray();
      res.send(result);
    });

    // Sorry For That It's Not Good Way
    app.get("/active", async (req, res) => {
      const result = await campaignCollection.find().limit(6).toArray();
      res.send(result);
    });

    // Get dynamic Data
    app.get("/campaigns/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await campaignCollection.findOne(query);
      res.send(user);
    });

    // Add a Update user
    app.put("/campaigns/:id", async (req, res) => {
      const id = req.params.id;
      const updatingData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: updatingData,
      };
      const result = await campaignCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // Delete a user by ID
    app.delete("/campaigns/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await campaignCollection.deleteOne(query);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Run the database connection setup
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crowd Nest Server</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1d3557, #457b9d);
            color: #f1faee;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            text-align: center;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 10px;
        }
        p {
            font-size: 1.5rem;
            margin-top: 0;
        }
        .status {
            margin-top: 20px;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #a8dadc;
            color: #1d3557;
            font-weight: bold;
            font-size: 1.2rem;
            display: inline-block;
            animation: blink 1.5s linear infinite;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Crowd Nest Server</h1>
        <p>Your server is up and running!</p>
        <div class="status">Server is Running</div>
    </div>
</body>
</html>
`);
});

app.listen(port, () => {
  console.log(`Crowd Nest Server Is Running on Port: ${port}`);
});
