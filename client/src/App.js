import React, {Component} from 'react';
import './App.css';
import Grid from './Helpers/Grid';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import Footer from './Footer';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;