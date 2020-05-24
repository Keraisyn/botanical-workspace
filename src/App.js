import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import Plant from "./components/plant";

function App() {
    return (
        <div className="App">
            <NavBar name="Made with <3 by Matthews, Samer, Rohan, and Harry"/>
            <div className="plant-container">
                <Plant/>
            </div>
        </div>
    );
}

export default App;
