import {Link} from "react-router-dom";
const NavigationBar = () => {
    return (
        <div className="navbar navbar-light bg-light">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
        </div>
    );
}

export default NavigationBar;