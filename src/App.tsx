import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import Register from "./pages/Register";
import { AddBook } from "./pages/AddBook";
import { Library } from "./pages/Library";
import { BookDetails } from "./pages/BookDetails";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Styles
import GlobalStyle from "./GlobalStyle";
import Layout from "./layouts/Layout";
import { Toaster } from "sonner";
import { UpdateBook } from "./pages/UpdateBook";
import { Feed } from "./pages/Feed";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <>
      <Toaster richColors position="bottom-right" />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/library" element={<Library />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/books/edit/:id" element={<UpdateBook />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
