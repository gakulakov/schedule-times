import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";

function App() {
    return (
        <div className="app">
            <Header title={'Krasa'}/>
            <Body />
        </div>
    );
}

export default App;
