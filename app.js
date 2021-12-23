require('dotenv').config();
require('./config/database').connect();
const { PORT } = process.env;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//importing routes
const authRoutes = require('./routes/user')

//testing routes
app.get("/welcome", (req, res) => {
    res.send("<h1>Hello From Auth System -LCO</h1>")
});

//predefined middleware
app.use(bodyParser.json())


//adding middle ware
app.use("/api", authRoutes)

app.listen(PORT, () => console.log(`ser is running at port ${PORT}...`));
