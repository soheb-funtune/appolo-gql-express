const Gql = require("./models/Gql.Model");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
    getAllPosts: async () => {
      return await Gql.find();
    },
    getSinglePost: async (parent, { id }, context, info) => {
      return await Gql.findById(id);
    },
  },

  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = new Gql({ title, description });
      await post.save();
      return post;
    },
    deleteSinglePost: async (parent, { id }, context, info) => {
      await Gql.findByIdAndDelete(id);
      console.log("delete", post);
      return "Post Deleted Successfully";
    },
    updatePost: async (parent, args, context, info) => {
      const { id, post } = args;
      const updatedPost = await Gql.findByIdAndUpdate(
        id,
        { ...post },
        { new: true }
      );
      return updatedPost;
    },
  },
};

module.exports = resolvers;
