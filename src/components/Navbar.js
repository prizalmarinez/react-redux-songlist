import React from 'react';

const Navbar = () => {
    return (
        <div className="ui menu">
            <div className="header item">
                React Redux Song List
            </div>
            <div className="item right">
                <a href="https://github.com/prizalmarinez?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <i className="github icon"></i>
                </a>
            </div>
        </div>
    );
};

export default Navbar;