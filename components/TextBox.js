import React from 'react'
import { useState } from 'react'

export const TextBox = () => {
    const [text, setText] = useState('');
    return (
        <>
            <h1>伝えたいこと</h1>
            <h2>{ text }</h2>
            <form>
                Name:
                <textarea type="text" value={text} onChange={e => setText(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
