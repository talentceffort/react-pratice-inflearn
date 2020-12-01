import React, { useState } from 'react';

const INIT_TEXT = 'Hihi'

export default function RefFunc() {
  const [text, setText] = useState(INIT_TEXT);
  const [showText, setShowText] = useState(true)
  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={ref => ref && setText(INIT_TEXT)}
          value={text}
          onChange={e => { console.log(e.target.value); return setText(e.target.value)}}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기 / 가리기</button>
    </div>
  )
}