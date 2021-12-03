import React from "react";
import './styles/styles.scss';
import { Link } from "react-router-dom";


const Nav = () => {
    return(
        <nav>
            <li>
                <Link to="/">All</Link>
            </li>
            <ul className="nav-links" >
                <li>
                    <Link to='/about'>Tesla</Link>
                </li>
                <li>
                    <Link to="/blog">Mers</Link>
                </li>
                <li>
                    <Link to="/kanstanta">BMW</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;