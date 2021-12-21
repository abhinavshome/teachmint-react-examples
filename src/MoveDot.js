import { useState } from "react";

const MoveDot = () => {
    const [coordinates, setCoordinates]= useState({x: 50, y:50});
    return (
        <div>
        <div style={{position: 'relative', left: 500}}>
            <div 
                style={{position:'absolute', top: coordinates.x, left: coordinates.y}}
            >
                x
            </div>
            <button 
                style={{position: 'absolute', top: 100, left: 0}} 
                onClick={() => setCoordinates({x: coordinates.x - 10, y: coordinates.y})}
            >
                &larr;
            </button>
            <button 
                style={{position: 'absolute', top: 100, left: 0}} 
                onClick={() => setCoordinates({x: coordinates.x, y: coordinates.y - 10})}
            >
                &larr;
            </button>
            <button 
                style={{position: 'absolute', top: 100, left: 30}} 
                onClick={() => setCoordinates({x: coordinates.x, y: coordinates.y + 10})}
            >
                &rarr;
            </button>
        </div>
        </div>
    );
};

export default MoveDot;