import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import AddMovie from "../pages/AddMovie";
import NotFound from "../pages/NotFound";

// Lazily load the other components
const Movies = lazy(() => import('../pages/Movie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Register = lazy(() => import('../pages/Register'));

export default function RoutesPaths() {
  return (
    <Suspense fallback={<h1>Loading.........</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movies />} />
          <Route path="add-movie" element={<AddMovie />} />
          <Route path="movie-details/:id" element={<MovieDetails />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
