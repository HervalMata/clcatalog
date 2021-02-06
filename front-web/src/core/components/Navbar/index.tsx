import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
                <h4>Cris Laços</h4>
            </Link>
        </div>
        <div className="com-6 offset-2">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" className="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalog">
                        CATÁLOGO
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin">
                        ADMIN
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;