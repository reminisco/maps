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
            <div>
                <h1>JW Territory Map System</h1>
                <h3>Burnham-on-sea</h3>
            </div>
        );
    }
}

export default Index;