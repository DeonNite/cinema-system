require("dotenv").config();

import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB Connected."))
.catch((err) => console.error(err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
