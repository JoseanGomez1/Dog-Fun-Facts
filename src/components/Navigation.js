// // //The Link component is useful for user navigation
// // import { Link } from "react-router-dom";

// // const Nav = (props) => {
// //     return (
// //         <nav className="nav">
// //             <Link to="/">Home</Link>
// //             <Link to="/ships">
// //                 <div>Starships Index</div>
// //             </Link>
// //         </nav>
// //     );
// // };

// // export default Nav;


// // The Link component is useful for user navigation
// import { Link } from "react-router-dom";

// const Nav = (props) => {
//   return (
//     <nav className="nav">
//       <Link to="/">Home</Link>
//       <Link to="/ships">
//         <div>Starships Index</div>
//       </Link>
//       <Link to="/about">About</Link> {/* Add a link to the About page */}
//     </nav>
//   );
// };

// export default Nav;

// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;

