import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Serie from "./pages/Serie";
import PopulerMovies from "./pages/sidePages/PopulerMovies";
import UpcomingMovies from "./pages/sidePages/UpcomingMovies";
import TrendingMovies from "./pages/sidePages/TrendingMovies";
import Details from "./pages/Details";
import TrendingSeries from "./pages/sidePages/TrendingSeries";
import PopulerSeries from "./pages/sidePages/PopulerSeries";
import UpcomingSeries from "./pages/sidePages/UpcomingSeries";
import { MovieProvider } from "./contexts/movieContext";
import { SerieProvider } from "./contexts/SerieContext";
// import { SerieProvider } from "./contexts/SerieContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <SerieProvider>
          <MovieProvider>
            <Routes>
              <Route element={<AppLayout />}>
                <Route element={<Navigate replace to="/" />} />
                <Route path="/" index element={<Home />} />
                <Route path="movie" element={<Movie />}></Route>
                <Route path="upcoming_movies" element={<UpcomingMovies />} />
                <Route path="populer_movies" element={<PopulerMovies />} />
                <Route path="trending_movies" element={<TrendingMovies />} />
                <Route path="series" element={<Serie />}></Route>
                <Route path="trending_series" element={<TrendingSeries />} />
                <Route path="populer_series" element={<PopulerSeries />} />
                <Route path="upcoming_series" element={<UpcomingSeries />} />
                <Route path="/:id" element={<Details />} />
              </Route>
            </Routes>
          </MovieProvider>
        </SerieProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
