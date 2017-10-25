import React, {Component} from 'react';
import './index.css';
import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles = {
    position: "fixed",
    bottom: "0",
    width: "100%",
};

class Footer extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <div style={styles}>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                >
                    <BottomNavigationButton label="Recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationButton label="Favorites" icon={<FavoriteIcon/>}/>
                    <BottomNavigationButton label="Nearby" icon={<LocationOnIcon/>}/>
                </BottomNavigation>
            </div>
        );
    }
}

export default Footer;