import { Link } from "react-router-dom";

function Header() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };
  return (
    <header>
      <h1>Dogs</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;