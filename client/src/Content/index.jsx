import React, {Component} from 'react';
import './index.css';
import Grid from '../Helpers/Grid';

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
                <Grid row={1}
                      height={1}
                      column={1}
                      width={4}
                >
                    <h1>Users</h1>
                </Grid>
                <Grid row={2}
                      height={3}
                      column={2}
                      width={3}
                >
                    {this.state.users.map(user =>
                        <div key={user.id}>{user.username}</div>
                    )}
                </Grid>
            </div>
        );
    }
}

export default Index;