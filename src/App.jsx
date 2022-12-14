import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CommentsPage from "./pages/CommentsPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/posts/:id/comments" element={<CommentsPage />} />

          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
