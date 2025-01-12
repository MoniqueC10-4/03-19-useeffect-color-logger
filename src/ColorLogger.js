import React from 'react';

const colors = ['red', 'blue', 'green', 'orange', 'yellow', 'indigo', 'violet'];

const getRandomColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function ColorLogger() {
    const [color, setColor] = React.useState('green');
    React.useEffect (() => {
        console.log(`The current color is`, color);
    }, [color]);

    return (
        <div>
        <button onClick={() => setColor(getRandomColor())}>Change Color</button>
        <p>The current color is {color}</p>
        </div>
    )
    }

export default ColorLogger;