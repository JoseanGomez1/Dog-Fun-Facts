import "./App.css";
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DogList from './DogList';
import DogDropdown from './DogDropdown'; // Import the DogDropdown component


function App() {

  return (
    <div className="App">
       <h1>Dog Information App</h1>
      <DogDropdown /> {/* Render the DogDropdown component */}
      <DogList /> {/* Render the DogList component */}
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

