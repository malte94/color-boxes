import React, {useState, useEffect} from 'react'
import './App.css'

/* ----------------------------- Global --------------------------- */

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

/* --------------------------------------------------------------- */

export default function App(props){ 
    
    const drawBoxes = () => {
        let n = 0;
        let drawBoxes = [];
        while (n < props.boxes) {
            drawBoxes.push(
            <ColorBox color={{getRandomColor}} key={n} />
            );
            n++;
        }
        return drawBoxes;
    }

    return (
    <div className="App">
        {drawBoxes()}
    </div>
    )
}

export function ColorBox() {

    const [color, setColor] = useState(clickHandler())

    const clickHandler = () => {
        setColor(getRandomColor())
    }

    return (
        <div className="color-box" 
             onClick={clickHandler}
             style={{backgroundColor: color}}/>
    )

}