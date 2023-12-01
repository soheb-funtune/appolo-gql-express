const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type postType {
    id: ID
    title: String
    description: String
  }
  type Query {
    hello: String
    getAllPosts: [postType]
    getSinglePost(id: ID): postType
  }

  input postInput {
    title: String
    description: String
  }

  type Mutation {
    createPost(post: postInput): postType
    deleteSinglePost(id: ID): String
    updatePost(id: ID, post: postInput): postType
  }
`;

module.exports = typeDefs;
