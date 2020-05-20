import './Menu.scss';
import React from "react";

export default function Menu() {
    return (
        <nav className="page-nav">
            <ul className="page-nav-list">
                <li><a href="#">Prąd stały</a></li>
                <li><a href="#">Prąd zmienny 1f</a></li>
                <li><a href="#">Prąd zmienny 3f</a></li>
                <li><a href="#">Dobór kabla</a></li>
            </ul>
        </nav>
    );
}

