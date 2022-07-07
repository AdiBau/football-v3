const express = require('express');
const app = express();
const teamRout = require('./routes/teamRout');
const playerRout = require('./routes/playerRout');
const statistic = require('./routes/statistic');

const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found')
require('dotenv').config();



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes


app.use('/football/v3/team', teamRout);
app.use('/football/v3/player', playerRout);
app.use('/football/v3/statistic', statistic);


app.use(notFound);

const port = process.env.PORT || 5000;


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
