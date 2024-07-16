import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <  NavLink className="navbar-brand" href="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            < NavLink className="nav-link" to="/home">Home <span className="sr-only">F</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <    NavLink className="nav-link" to="/show">Show</NavLink>
                        </li>


                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;