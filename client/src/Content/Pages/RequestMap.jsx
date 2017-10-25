import {connect} from 'react-redux'
import FilteredMapTiles from './../Components/FilteredMapTiles'

const getVisibleMaps = (maps, user) => {
    return maps.filter((map, index) => {
        return map.assigned !== true;
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

const RequestMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilteredMapTiles);

export default RequestMap