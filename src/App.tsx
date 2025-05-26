// External Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import Register from "./pages/Register";

// Styles
import GlobalStyle from "./GlobalStyle";
import ProtectedRoute from "./components/ProtectedRoute";
import { AddBook } from "./pages/AddBook";
import { Library } from "./pages/Library";
import { BookDetails } from "./pages/BookDetails";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-book"
          element={
            <ProtectedRoute>
              <AddBook />
            </ProtectedRoute>
          }
        />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <BookDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
