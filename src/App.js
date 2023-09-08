import "./App.css";
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DogList from './DogList';
import DogDropdown from './DogDropdown'; // drop down men import
import Backgroundimage from './components/Backgroundimage'; // Import the Backgroundimage component


function App() {

  return (
      <div className="App min-h-screen bg-gray-100">
        <Backgroundimage /> {/* Use the Backgroundimage component as the background */}
        <div className="relative z-10 p-4">
          <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
          <div className="mb-4">
            <DogDropdown />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <DogList />
          </div>
          {}
        </div>
      </div>
    );
  }
//     <div className="App">
//        <h1>Dog Information App</h1>
//       <DogDropdown /> {/* Render the DogDropdown component */}
//       <DogList /> {/* Render the DogList component */}
//       <Header />
//       <Routes>
//       <Route exact path="/" element={<Home />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

export default App;

