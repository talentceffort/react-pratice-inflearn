import React, { useRef } from 'react';
import { useState } from 'react';

export default function ConditionalRef() {
  const inputRef = useRef(null);
  const [showText, setShowText] = useState(true);
  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>
        텍스트 보이기 / 가리기
      </button>
      <button onClick={() => inputRef.current && inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  )
}

// input 요소가 존재하지 않을 경우를 생각해야함. 조건부 렌더링일 경우 검사하는 식 필요