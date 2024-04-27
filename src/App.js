import React, {useState} from 'react';
import CountdownTimer from "./components/countdownTimer";
import s from './app.module.css';
import UserList from "./components/userList";
import WindowSize from "./components/windowSize";

const App = () => {
    return (
        <div className={s.app}>
            <CountdownTimer />
            <UserList />
            <WindowSize />
        </div>
    )
}


export default App;
