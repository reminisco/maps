import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import MyMaps from './Pages/MyMaps';
import AllMaps from './Pages/AllMaps';
import RequestMap from './Pages/RequestMap';

class Index extends Component {
    render() {
        return (
            <div style={{height: "100%"}}>
                <Route path="/all-maps" component={AllMaps}/>
                <Route path="/my-maps" component={MyMaps}/>
                <Route path="/request-a-map" component={RequestMap}/>
            </div>
        );
    }
}

export default Index;