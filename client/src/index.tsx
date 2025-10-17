<<<<<<< HEAD
import React from "react";
import { createRoot } from 'react-dom/client'
import GlobalStyles from "./styles";
import Pages from "./pages";
=======
import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles';
import Pages from './pages';
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
