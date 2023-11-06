import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MovieProvider } from "./contexts/movieContext";
import { SerieProvider } from "./contexts/SerieContext";

import Details from "./pages/Details";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotPage from "./pages/NotPage";
import Serie from "./pages/Serie";
import PopulerMovies from "./pages/sidePages/PopulerMovies";
import PopulerSeries from "./pages/sidePages/PopulerSeries";
import TrendingMovies from "./pages/sidePages/TrendingMovies";
import TrendingSeries from "./pages/sidePages/TrendingSeries";
import UpcomingMovies from "./pages/sidePages/UpcomingMovies";
import AppLayout from "./ui/AppLayout";
import { ScrollToTop } from "./ui/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <SerieProvider>
          <MovieProvider>
            <ScrollToTop />
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
                <Route path="/:id" element={<Details />} />
                <Route path="/*" element={<NotPage />} />
              </Route>
            </Routes>
          </MovieProvider>
        </SerieProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
