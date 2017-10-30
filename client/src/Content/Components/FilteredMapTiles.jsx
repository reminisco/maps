import React from 'react';
import MapTile from './MapTile';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {}
});

const FilteredMapTiles = (props) => {

    const {classes, maps} = props;
    return (
        <div className={classes.container}>
            {maps.map(map => (
                <MapTile {...map}/>
            ))}
        </div>
    );
};

export default withStyles(styles)(FilteredMapTiles);