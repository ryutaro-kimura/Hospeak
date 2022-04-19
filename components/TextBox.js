import React from 'react'
import { useState } from 'react'

export const TextBox = ({onTextToSpeech}) => {
    const [text, setText] = useState('');
    return (
        <>
            <h2>伝えたいこと</h2>
            <h3 className='balloon'>{ text }</h3>
            <form>
                <label className="phrase-label">
                <textarea className="phrase-box" placeholder="伝えたいこと" type="text" value={text} onChange={e => setText(e.target.value)} />
                </label>
            </form>
            <button onClick={() => onTextToSpeech(text)}>話す</button>
        </>
    )
}
