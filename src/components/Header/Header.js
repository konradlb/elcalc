import './Header.scss';
import React from "react";
import Menu from "../Menu/Menu";

export default function Header() {
    return (
        <header className="page-header">
            <div className="headerContainer">
                <a href="/" className="pageLogo">
                    <img src="img/logo.png" alt="elcalc.pl" />
                </a>
                <a href="/" className="pageTitle">
                    Kalkulator Elektryka
                </a>


                <Menu />
            </div>
        </header>
    );
}