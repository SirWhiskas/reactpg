import React from 'react';

const DirectionalPad = ({ onClick }) => {
    return ( 
        <React.Fragment>
            <div className="row center ">
                <div className="col-4">
                    <button 
                        className="directionalBtn" 
                        onClick={() => onClick("North")}
                    >
                        North
                    </button>
                </div>
            </div>
            <div className="row center">
                <div className="col-2">
                    <button 
                        className="directionalBtn" 
                        onClick={() => onClick("West")}
                    >
                        West
                    </button>
                </div>
                <div className="col-2">
                    <button 
                        className="directionalBtn"
                        onClick={() => onClick("East")}
                    >
                        East
                    </button>
                </div>
            </div>
            <div className="row center">
                <div className="col-4">
                    <button 
                        className="directionalBtn"
                        onClick={() => onClick("South")}
                    >
                        South
                    </button>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default DirectionalPad;