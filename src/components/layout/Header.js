import Toggle from "./Toggle";
import NavBar from "./NavBar";

function Header() {
    return (
        <div className="nav-parent">
            <header className="navbar-wrapper">
                <h1 className="my-name">Aaroosh Agarwal</h1>
                <Toggle />
            </header>
            <NavBar />
        </div>
    );
}

export default Header;
