// Lifting State Up - подъём состояния вверх
// У нас есть input, мы вводим текст - он вызывает onTextChange - передает наш текст - родительский компонент получает текст и выводит его на экран
// поднимать данные из дочернего компонента вверх, и управлять состоянием в одном месте

import React, { useState } from 'react'

function Input({onTextChage}) {
    return (
        <input type="text" placeholder='Введите текст' onChange={(e) => onTextChage(e.target.value)} />
    )
}

export default function LiftingState() {
    const [text, setText] = useState("");
  return (
    <div>
        <h1>Подъём состояния вверх</h1>
        <Input onTextChage={setText}/>
        <p>Родительский получил: {text}</p>

    </div>
  )
}

