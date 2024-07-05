const express = require('express');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

dotenv.config();

// Connect to database
connectDB();
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
