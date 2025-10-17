import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
<<<<<<< HEAD
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (parent, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
=======
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // get a single track by ID, for the track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
<<<<<<< HEAD
=======
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
  },
};
