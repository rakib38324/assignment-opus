import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar  max-w-screen-xl mx-auto py-9">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Overview</a></li>
                        <li><a>Pages</a></li>
                        <li><a>Template</a></li>
                    </ul>
                </div>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9993 0.666016C21.3593 0.666016 27.3327 6.63935 27.3327 13.9993C27.3327 21.3593 21.3593 27.3327 13.9993 27.3327C6.63935 27.3327 0.666016 21.3593 0.666016 13.9993C0.666016 6.63935 6.63935 0.666016 13.9993 0.666016ZM13.9993 24.666C19.902 24.666 24.666 19.902 24.666 13.9993C24.666 8.0967 19.902 3.33268 13.9993 3.33268C12.5981 3.33093 11.2102 3.60563 9.9153 4.14106C8.6204 4.67649 7.4438 5.46212 6.45296 6.45296C5.46212 7.4438 4.67649 8.6204 4.14106 9.9153C3.60563 11.2102 3.33093 12.5981 3.33268 13.9993C3.33268 19.902 8.0967 24.666 13.9993 24.666ZM13.9993 21.9993C9.5727 21.9993 5.99935 18.426 5.99935 13.9993C5.99935 9.5727 9.5727 5.99935 13.9993 5.99935C18.426 5.99935 21.9993 9.5727 21.9993 13.9993C21.9993 18.426 18.426 21.9993 13.9993 21.9993ZM13.9993 11.3327C12.5327 11.3327 11.3327 12.5327 11.3327 13.9993C11.3327 15.466 12.5327 16.666 13.9993 16.666C15.466 16.666 16.666 15.466 16.666 13.9993C16.666 12.5327 15.466 11.3327 13.9993 11.3327Z" fill="#1355FF" />
                </svg>

                <button className="pl-2 normal-case text-xl font-bold">opus</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Overview</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Template</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="py-3 px-4 text-white bg-blue-600 hover:bg-blue-400">Contact Us</button>
            </div>
        </div>
    );
};

export default Navbar;