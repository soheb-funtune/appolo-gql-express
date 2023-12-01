const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolver");
const mongoose = require("mongoose");

async function startServer() {
  const app = express();
  const apololoServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apololoServer.start();

  apololoServer.applyMiddleware({ app: app });

  app.use((req, res) => {
    res.send("Hello from Express Apollo Server");
  });

  await mongoose.connect(
    `mongodb+srv://Soheb:soheb1999@cluster0.cbtaqjr.mongodb.net/blog?retryWrites=true&w=majority`
  );
  console.log("Mongo DB connection Sunccessful");

  //   await
  //   mongodb+srv://soheb1999:soheb1999@cluster0.jwttb.mongodb.net/node-express-prac?retryWrites=true&w=majority
  app.listen(4000, () => {
    console.log("Server is Listening on port 4000");
  });
}

startServer();
