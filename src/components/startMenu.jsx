import React from 'react';
import { Link } from 'react-router-dom';

const StartMenu = () => {
    return (
        <div className="startMenu">
            <Link to='/newGameForm'><button className="hvr-sweep-to-right startBtn">New Game</button></Link>
            <Link to='/loadGame'><button className="startBtn hvr-sweep-to-left">Load Game</button></Link>
        </div>
    );
}

export default StartMenu;