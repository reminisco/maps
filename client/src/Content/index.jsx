import React, {Component} from 'react';
import './index.css';
import Grid from '../Helpers/Grid';
import { Route } from 'react-router-dom';
import Header from '../Header';

class Index extends Component {
    state = {users: []}

    // componentDidMount() {
    //     fetch('/users')
    //         .then(res => res.json())
    //         .then(users => this.setState({users}));
    // }

    render() {
        return (
            <div>
                <Route path="/test" component={Header} />
            </div>
        );
    }
}

export default Index;