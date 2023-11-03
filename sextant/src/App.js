import React, { Component } from 'react';
import './App.css';
import Banner from './Banners';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="First exhibit"></Exhibit>
                <Exhibit name="Second exhibit"></Exhibit>
            </div>
        );
    }
}

export default App;