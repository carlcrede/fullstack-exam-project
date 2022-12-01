import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/auth/Login";
import ItemsContainer from "./components/ItemsContainer";
import Register from "./components/auth/Register";
import SearchResults from './components/SearchResults';
import TvDetails from "./components/TvDetails";
import MovieDetails from "./components/MovieDetails";
import UserProfile from './components/user/UserProfile';
import * as Sentry from "@sentry/react";
import {BrowserTracing} from "@sentry/tracing";

Sentry.init({
    dsn: "https://63e9789b797548e18a65da09a2dab4f0@o4504253791862784.ingest.sentry.io/4504253797105664",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <Routes>
      <Route path={'/'} element={<App />}>
        <Route path={''} element={<ItemsContainer />} />
        <Route path={'search'} element={<SearchResults />} />
        <Route path={'tv/:id'} element={<TvDetails />} />
        <Route path={'movie/:id'} element={<MovieDetails />} />
        <Route path={'login'} element={<Login />} />
        <Route path={'register'} element={<Register />} />
        <Route path={'me'} element={<UserProfile />} />
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
);