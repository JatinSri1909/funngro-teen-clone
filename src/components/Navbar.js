import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <nav>
            <a>
                <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg" alt="Funngro Logo" />
            </a>
        <ul>
            <li>Teen</li>
            <li>Company</li>
            <li>Parent</li>
            <li>
                <button>Company Login</button>
            </li>
        </ul>
        </nav>
    );
}

export default Navbar;