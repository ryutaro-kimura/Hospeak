import React from 'react'
import { useState } from 'react'

export const TextBox = ({onTextToSpeech}) => {
    const [text, setText] = useState('');
    return (
        <>
            <h2>伝えたいこと</h2>
            <h3 className='balloon'>{ text }</h3>
            <form>
                <textarea type="text" value={text} onChange={e => setText(e.target.value)} />
            </form>
            <button onClick={() => onTextToSpeech(text)}>test</button>
        </>
    )
}
