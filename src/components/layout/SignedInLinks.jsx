import React from 'react';
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Post</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/profile" className="btn btn-floating indigo accent-1">FL</NavLink></li>
        </ul>
    );
};

export default SignedInLinks;