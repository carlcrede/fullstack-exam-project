import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/auth/Login";
import ItemsContainer from "./components/ItemsContainer";
import TvDetails from "./components/TvDetails";
import MovieDetails from "./components/MovieDetails";
import Register from "./components/auth/Register";
import SearchResults from './components/SearchResults';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={''} element={<ItemsContainer />} />
          <Route path={'search'} element={<SearchResults />} />
          <Route path={'tv/:id'} element={<TvDetails />} />
          <Route path={'movie/:id'} element={<MovieDetails />} />
          <Route path={'login'} element={<Login />} />
          <Route path={'register'} element={<Register />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);