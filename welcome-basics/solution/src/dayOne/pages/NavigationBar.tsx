import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className="nav">
                    <li className="nav-item">
                        <Link className="nav-link nav-link-color" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-color" to="/counter">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-color" to="/duck">Ducks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-link-color" to="/about">About Us</Link>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;