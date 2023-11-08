import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Eat from "./Eat";
import Sleep from "./Sleep";
import Travel from "./Travel";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/eat" element={<Eat />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
