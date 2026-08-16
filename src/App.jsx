import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* =========================
          LOADER
      ========================= */}
      <AnimatePresence mode="wait">
        {loading && (
          <Loader
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* =========================
          WEBSITE
      ========================= */}
      {!loading && (
        <>
          <Navbar />

          <div className="min-h-screen flex flex-col">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/works"
                element={<Work />}
              />

              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default App;