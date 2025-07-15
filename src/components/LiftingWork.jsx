import React, { useState} from 'react'

function Input({onTextChage}) {
    return (
        <input placeholder='Введите число' onChange={(e) => onTextChage(e.target.value)} />
    )
}
function Input2({onTextChage}) {
    return (
        <input placeholder='Введите число' onChange={(e) => onTextChage(e.target.value)} />
    )
}

function LiftingWork() {
    const [num, setNum] = useState("");
    const [num2, setNum2] = useState("");
  return (
    <div>
        <h1>Подъём состояния вверх</h1>
        <Input onTextChage={setNum} />
        <Input2 onTextChage={setNum2} />
        <p>Родительский получил: {num} + {num2} = {+num + +num2}</p>

    </div>
  )
}

export default LiftingWork