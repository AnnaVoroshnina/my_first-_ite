import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
    return ( /*функция кот возвращ jsx разметку*/
        <div className="app-wrapper"> {/*родительский контейнер*/}
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}
export default App;
