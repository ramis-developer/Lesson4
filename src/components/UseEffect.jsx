// UseEffect - реакция на события
// когда что-то изменилось - запусти useEffect
// мы нажимаем кнопку и увеличиваем count, каждый раз когда count меняется - useEffect срабатывает
// следить за изменениями count и автоматически запускает действие

import React, {useEffect, useState} from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=> {alert('Компонент обновился!')}, [count]); 
  return (
    <div >
        <h1>UseEffect</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Увеличить {count}</button>
    </div>
  )
}
