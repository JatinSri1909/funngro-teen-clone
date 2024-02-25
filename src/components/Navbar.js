import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="nav-left">
                {/*eslint-disable-next-line*/}
                <a>
                    <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg" alt="Funngro Logo" />
                </a>
            </div>
            <div className="nav-right">
                <button className='menu-button' onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                <ul className={isOpen ? 'show' : ''}>
                    <li>Teen</li>
                    <li>Company</li>
                    <li>Parent</li>
                    <li>
                        <button className='Login-button'>Company Login</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
