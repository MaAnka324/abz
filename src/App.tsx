import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Users from "./components/Users";
import FormComponent from "./components/FormComponent";

function App() {
    return (
            <div className="App">
                <Header/>
                <Main/>
                <Users/>
                <FormComponent/>
            </div>
    );
}

export default App;
