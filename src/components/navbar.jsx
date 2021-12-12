import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbarUL">
                    <button className="navBtn navMonth">
                        <i className="fas fa-th"></i>
                    </button>
                    <button className="navBtn navWeek">
                        <i className="fas fa-minus-square"></i>
                    </button>
                    <button className="navBtn navDay">
                        <i className="fas fa-square"></i>
                    </button>
                    <button className="navBtn navHabit">
                        <i className="fas fa-tasks"></i> 
                    </button>
                </ul>
            </div>
        );
    }
}

export default Navbar;