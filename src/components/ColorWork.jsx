import React,{ useState } from 'react'

function ColorInput({ onColorChange }) {
    return(
        <button onClick={() => onColorChange("blue")}>Blue</button>
    )
}
function ColorInput2({ onColorChange }) {
    return(
        <button onClick={() => onColorChange("yellow")}>Yellow</button>
    )
}

function ColorWork() {
    const [color, setColor] = useState("");
    const [color2, setColor2] = useState("");
  return (
    <div className='ColorWork'>
        <h1>Работа с цветом</h1>
        <ColorInput onColorChange={setColor} />
        <ColorInput2 onColorChange={setColor2} />
        <p>Родительский получил цвет: {color}</p>
        <div style={{ width: '100px', height: '100px', backgroundColor: color  }}></div>
        <p>Родительский получил цвет: {color2}</p>
        <div style={{ width: '100px', height: '100px', backgroundColor : color2 }}></div>
    </div>
  )
}

export default ColorWork