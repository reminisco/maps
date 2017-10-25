import {connect} from 'react-redux'
import FilteredMapTiles from './../Components/FilteredMapTiles'

const getVisibleMaps = (maps, user) => {
    return maps.sort((a, b) => {
        return a.number > b.number;
    });
};

const mapStateToProps = state => {
    return {
        maps: getVisibleMaps(state.maps, state.user)
    }
};

const mapDispatchToProps = dispatch => {
    return {};
};

const AllMaps = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilteredMapTiles);

export default AllMaps