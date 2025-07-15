// useRef - это секретная ячейка памяти
// useRef - это как невидимая коробка, в которую можно что-то положить и react не забудет это.
// Также можно использовать ref, чтобы пальцем указать на HTML элемент
// input - указывает на поле ввода 
// нажатие кнопки - фокус на поле
// prevText - помнит что было введена раньше

import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const inputRef = useRef();
    const [text, setText] = useState('');
    const prevText = useRef('');

    useEffect(() => {
        prevText.current = text
    }, [text])
    const focus = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <h3>useRef</h3>
        <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={focus}>Фокус на поле</button>
        <p>Предыдущее значение: {prevText.current}</p>
    </div>
  )
}