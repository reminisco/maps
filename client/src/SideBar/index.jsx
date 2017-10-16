import React, {Component} from 'react';
import './index.css';

class Index extends Component {
    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
            <div className="sidebar">
                <h1>Side Bar</h1>
            </div>

    );
    }
}

export default Index;