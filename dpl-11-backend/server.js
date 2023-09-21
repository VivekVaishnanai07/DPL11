const express = require('express');
const db = require('./config/db.config')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const matchRoutes = require('./routes/matchRoutes');
const predictionRoutes = require('./routes/predictionRoutes');

const app = express();

const PORT = 3300;
app.use(cors());
app.use(express.json())


app.use("/api/user", userRoutes);

app.use("/api/team", teamRoutes)

app.use("/api/match", matchRoutes)

app.use("/api/prediction", predictionRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})