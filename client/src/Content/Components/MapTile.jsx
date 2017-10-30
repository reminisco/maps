import React from 'react';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
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
        width: 500,
        height: 450,
    },
});

const MapTile = (props) => {

    const {classes, id, number, name} = props;
    return (
        <div className={classes.cont}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={"https://bosmaps.hikingduck.co.uk/img/maps/" + id + ".jpg"}
                    title={name}
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        {number}
                    </Typography>
                    <Typography component="p">
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default withStyles(styles)(MapTile);