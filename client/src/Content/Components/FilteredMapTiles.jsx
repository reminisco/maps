import React from 'react';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import {GridList, GridListTile, GridListTileBar} from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
    },
});

const MapTile = (props) => {

    const {classes, maps} = props;
    return (
        <div className={classes.container}>
            <GridList cols="3" cellHeight={250} className={classes.gridList} spacing={25}>
                {maps.map(map => (
                    <GridListTile key={map.id}>
                        <img src={"https://bosmaps.hikingduck.co.uk/img/maps/" + map.id + ".jpg"} alt={map.name}/>
                        <GridListTileBar
                            title={map.number}
                            subtitle={<Typography type="title" color="inherit">{map.name}</Typography>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default withStyles(styles)(MapTile);