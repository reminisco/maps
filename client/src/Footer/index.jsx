import React, {Component} from 'react';
import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation';
import ViewModule from 'material-ui-icons/ViewModule';
import InsertPhoto from 'material-ui-icons/InsertPhoto';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import {Link} from 'react-router-dom';
import {withStyles} from 'material-ui/styles';

const styles = {
    root: {
        position: "fixed",
        bottom: "0",
        width: "100%",
    }
};

class Footer extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationButton
                    label="All Maps"
                    icon={<ViewModule/>}
                    component={Link}
                    to="/all-maps"
                />
                <BottomNavigationButton
                    label="Request Maps"
                    icon={<InsertPhoto/>}
                    component={Link}
                    to="/request-a-map"
                />
                <BottomNavigationButton
                    label="My Maps"
                    icon={<LocationOnIcon/>}
                    component={Link}
                    to="/my-maps"
                />
            </BottomNavigation>
        );
    }
}

export default withStyles(styles)(Footer);