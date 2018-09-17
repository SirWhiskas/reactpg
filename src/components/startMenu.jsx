import React from 'react';
import { Link } from 'react-router-dom';

const StartMenu = () => {
    return (
        <div className="startMenu">
            <button><Link to='/newGame'>New Game</Link></button>
            <button><Link to='/loadGame'>Load Game</Link></button>
        </div>
    );
}

export default StartMenu;