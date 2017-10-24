import React, {Component} from 'react';
import './index.css';
import {NavLink} from 'react-router-dom'

class Index extends Component {

    render() {
        return (
            <div className="sidebar">
                <nav>
                    <button>
                        <NavLink to="/all-maps">View All Maps</NavLink>
                    </button>
                    <button>
                        <NavLink to="/available-maps">View Available Maps</NavLink>
                    </button>
                    <button>
                        <NavLink to="/assigned-maps">View Assigned Maps</NavLink>
                    </button>
                </nav>
            </div>
        );
    }
}

export default Index;