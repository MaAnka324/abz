import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
    return (
            <div className="App">
                <Header/>
                <Main/>
                <Users/>
                <Form/>
            </div>
    );
}

export default App;
