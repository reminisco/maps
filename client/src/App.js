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
            <Grid rows='100px auto 50px'
                  columns='1fr 4fr'
                  style={{height: '100vh', width: '100vw'}}
            >

                {/* Content */}
                <Grid row={2}
                      height={1}
                      column={2}
                      width={1}
                      rows='repeat(4 1fr)'
                      columns='repeat(4 1fr)'
                >
                    <Content/>
                </Grid>

                {/* SideBar */}
                <Grid row={2}
                      height={1}
                      column={1}
                      width={1}
                >
                    <SideBar/>
                </Grid>

                {/* Header */}
                <Grid row={1}
                      height={1}
                      column={1}
                      width={2}
                >
                    <Header/>
                </Grid>

                {/* Footer */}
                <Grid row={3}
                      height={1}
                      column={1}
                      width={2}
                >
                    <Footer/>
                </Grid>
            </Grid>
        );
    }
}

export default App;