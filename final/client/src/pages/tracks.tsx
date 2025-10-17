<<<<<<< HEAD
import React from "react";
import { Layout } from "../components";
=======
<<<<<<<< HEAD:client/src/pages/tracks.tsx
import React from "react";
import { Layout } from "../components";
========
import React from 'react';
import { Layout } from '../components';
>>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e:final/client/src/pages/tracks.tsx
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
import QueryResult from "../components/query-result";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";

/** TRACKS query to retrieve all tracks */
<<<<<<< HEAD
export const TRACKS = gql(`
=======
<<<<<<<< HEAD:client/src/pages/tracks.tsx
export const TRACKS = gql(`
========
const TRACKS = gql(`
>>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e:final/client/src/pages/tracks.tsx
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
