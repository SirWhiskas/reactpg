import React from 'react';

const BattlePad = ({ onClick }) => {
    return (
        <React.Fragment>
            <div className="row center">
                <div className="col-2">
                    <button
                        className="directionalBtn"
                        onClick={() => onClick("Attack")}
                    >
                        Attack
                    </button>
                </div>
                <div className="col-2">
                    <button
                        className="directionalBtn"
                        onClick={() => onClick("Retreat")}
                    >
                        Retreat
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BattlePad;