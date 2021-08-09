import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage")
);
// const NotFoundPage = lazy(() =>
//   import("./components/NotFoundPage/NotFoundPage")
// );

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <AppBar />
        </header>

        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies" exact>
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route>
              <Redirect to={"/"} />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Container>
  );
}

export default App;
