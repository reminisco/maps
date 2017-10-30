import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    container: {
        textAlign: 'center',
        minWidth: '200px',
        minHeight: '200px',
        width: '31vw',
        height: '31vw',
        maxWidth: '400px',
        maxHeight: '400px',
        float: 'left',
        border: '1px solid grey',
        margin: '1vw',
    },
    content: {
        textAlign: 'center',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
    },
    img: {
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    info: {
        width: '100%',
        position: 'absolute',
        top: 0,
        background: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
    },
});

const MapTile = (props) => {

    const {classes, id, number, name} = props;
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <img className={classes.img} src={"https://bosmaps.hikingduck.co.uk/img/maps/" + id + ".jpg"}/>
                <div className={classes.info}>
                    <Typography type="headline" component="h2">
                        {number}
                    </Typography>
                    <Typography component="p">
                        {name}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(MapTile);