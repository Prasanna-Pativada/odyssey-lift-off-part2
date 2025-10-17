import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { TrackAPI } from "./datasources/track-api";
<<<<<<< HEAD
 
=======

>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
<<<<<<< HEAD
        datasources: {
=======
        dataSources: {
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}
<<<<<<< HEAD
 
startApolloServer();
=======

startApolloServer();
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
