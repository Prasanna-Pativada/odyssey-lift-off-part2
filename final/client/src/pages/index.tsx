<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** importing our pages */
import Tracks from "./tracks";
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Tracks from './tracks';
import Track from "./track";
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path="/" />
<<<<<<< HEAD
=======
        <Route element={<Track />} path="/track/:trackId" />
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
      </Routes>
    </BrowserRouter>
  );
}
