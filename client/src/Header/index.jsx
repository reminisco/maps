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
            <h1>Header</h1>
        );
    }
}

export default Index;