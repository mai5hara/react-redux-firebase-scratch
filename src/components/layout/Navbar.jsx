import React from 'react';
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
    return (
        <nav className="nav-wrapper deep-orange darken-4">
            <Link to="/" className="brand-logo left">Blog</Link>
            <ul id="nav-mobile" className="right">
                <SignedInLinks />
                <SignedOutLinks />
            </ul>
        </nav>

    );
};

export default Navbar;