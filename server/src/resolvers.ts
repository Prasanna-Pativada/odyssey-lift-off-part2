import { Resolvers } from "./types";
<<<<<<< HEAD
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
=======

export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
    },
  },
};
