import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex">
      <div className="logo flex">
        <i class="fa-solid fa-database"></i>
        <span className="logo-title">DASHBOARD</span>
      </div>
      <input
        type="search"
        placeholder="Search Documentation..."
        className="search"
      />
    </header>
  );
}

export default Header;
