import React from 'react';
import MapTile from './MapTile';

const FilteredMapTiles = ({maps}) => {
    console.log(maps);
    return (
        <ul>
            {maps.map((map, index) => (
                <MapTile key={index} {...map} />
            ))}
        </ul>
    )
};

export default FilteredMapTiles