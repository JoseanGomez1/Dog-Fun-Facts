// import "./App.css";
// import React from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import DogList from './DogList';
// import DogDropdown from './DogDropdown'; // drop down men import
// import Backgroundimage from './components/Backgroundimage'; // Import the Backgroundimage component
// import Nav from "./components/Nav";

// // function App() {
// //   return (
// //     <div className="App min-h-screen bg-gray-100">
// //       <Backgroundimage />
// //       <Nav /> {/* Include the Nav component here */}
// //       <div className="relative z-10 p-4">
// //         <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
// //         <div className="mb-4">
// //           <DogDropdown />
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow-lg">
// //           <DogList />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// function App() {

//   return (
//       <div className="App min-h-screen bg-gray-100">
//         <Backgroundimage /> {/* Use the Backgroundimage component as the background */}
//         <div className="relative z-10 p-4">
//           <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
//           <div className="mb-4">
//             <DogDropdown />
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <DogList />
//           </div>
//           {}
//         </div>
//       </div>
//     );
//   }
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

// export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import DogList from "./DogList";
// import DogDropdown from "./DogDropdown";
// import Backgroundimage from "./components/Backgroundimage";
// import Nav from "./components/Nav";
// import About from "./components/About"; // Import the About component

// function App() {
//   return (
//     <div className="App min-h-screen bg-gray-100">
//       <Backgroundimage />
//       <Nav />
//       <div className="relative z-10 p-4">
//         <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} /> {/* Route for the About page */}
// //           <Route path="/dogs" element={<DogDropdown />} />
// //           <Route path="/doglist" element={<DogList />} />
// //         </Routes>
// //       </div>
// //     </div>
//   );
// }

// export default App;

import "./App.css";
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DogList from './DogList';
import DogDropdown from './DogDropdown'; // drop-down menu import
import Backgroundimage from './components/Backgroundimage'; // Import the Backgroundimage component

function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <Backgroundimage />
       <div className="relative z-10 p-4">
      <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
         <div className="mb-4">
           <DogDropdown />
         </div>
         <div className="bg-white p-4 rounded-lg shadow-lg">
                     <DogList />
        </div>
       </div>
     </div>
  );
}

export default App;

// import "./App.css";
// import React from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import DogList from './DogList';
// import DogDropdown from './DogDropdown'; // drop-down menu import
// import Backgroundimage from './components/Backgroundimage'; // Import the Backgroundimage component
// import Nav from "./components/Nav"; // Import the Nav component

// // function App() {
//   return (
//     <div className="App min-h-screen bg-gray-100">
//       <Backgroundimage />
//       <Nav />
//       <div className="relative z-10 p-4">
//         <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
//         <div className="mb-4">
//           <DogDropdown />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <DogList />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// ... (imports and previous code)
// import "./App.css";
// import React from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import DogList from './DogList';
// import DogDropdown from './DogDropdown'; // drop-down menu import
// import Backgroundimage from './components/Backgroundimage'; // Import the Backgroundimage component
// import Nav from "./components/Nav"; // Import the Nav component
// import About from "./About"; // Import the About component

// function App() {
//   return (
//     <div className="App min-h-screen bg-gray-100">
//       <Backgroundimage />
//       <Nav />
//       <div className="relative z-10 p-4">
//         <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
//         <div className="mb-4">
//           <DogDropdown />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} /> {/* Route for the About page */}
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default App;
// import "./App.css";
// import React from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import DogList from './DogList';
// import DogDropdown from './DogDropdown'; // drop-down menu import
// import Backgroundimage from './components/Backgroundimage'; // Import the Backgroundimage component

// function App() {
//   return (
//     <div className="App min-h-screen bg-gray-100">
//       <Backgroundimage />
//       <div className="relative z-10 p-4">
//         <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
//         <div className="mb-4">
//           <DogDropdown />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <DogList />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import "./App.css";
// import React from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import DogList from './DogList';
// import DogDropdown from './DogDropdown'; // drop-down menu import
// import Backgroundimage from './components/Backgroundimage'; // Import the Backgroundimage component
// import Nav from "./components/Navigation"; // Import the Nav component
// import About from "./About"; // Import the About component

// function App() {
//   return (
//     <div className="App min-h-screen bg-gray-100">
//       <Header /> {/* Add the Header component */}
//       <div className="relative z-10 p-4">
//         <Backgroundimage />
//         <Nav />
//         <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
//         <div className="mb-4">
//           <DogDropdown />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} /> {/* Route for the About page */}
//           </Routes>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
// import "./App.css";
// import React from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import DogList from './DogList';
// import DogDropdown from './DogDropdown'; // drop-down menu import
// import Backgroundimage from './components/Backgroundimage'; // Import the Backgroundimage component
// import Nav from "./components/Navigation"; // Import the Nav component
// import About from "./About"; // Import the About component



// function App() {
//   function DogDropdown() {
//     const [selectedBreed, setSelectedBreed] = useState(''); // Initialize with an empty string
//     // ... rest of your component code
//   }
//   return (
//     <div className="App min-h-screen bg-gray-100">
//       <Header /> {/* Add the Header component */}
//       <div className="relative z-10 p-4">
//         <Backgroundimage />
//         <Nav />
//         <h1 className="text-3xl font-semibold mb-4">Dog Information App</h1>
//         <div className="mb-4">
//           <DogDropdown />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} /> {/* Route for the About page */}
//           </Routes>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
