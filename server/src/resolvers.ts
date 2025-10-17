import { Resolvers } from "./types";
import { DataSourceContext } from "./context";

// The Resolvers type is generic and accepts the context type
export const resolvers: Resolvers<DataSourceContext> = {
  Query: {
    // Resolver for fetching all tracks for the homepage
    tracksForHome: (_parent, _args, { datasources }) => {
      return datasources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    // Resolver for fetching the author of a track
    author: ({ authorId }, _args, { datasources }) => {
      return datasources.trackAPI.getAuthor(authorId);
    },
  },
};
