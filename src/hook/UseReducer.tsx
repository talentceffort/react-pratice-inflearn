import React, { useEffect, useReducer } from 'react';

interface StateProps {
  hour: number;
  minute: number;
  second : number;
}

export default function Timer({ initialTotalSeconds }: { initialTotalSeconds: number }) {
  const initialState: StateProps = {
    hour: Math.floor(initialTotalSeconds / 3600),
    minute: Math.floor((initialTotalSeconds % 3600) / 60),
    second: initialTotalSeconds % 60
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  // const { hour, minute, second } = state;

  useEffect(() => {
    const id = setInterval(dispatch, 1000);
    return () => clearInterval(id)
  })

  // ...
}

function reducer(state: StateProps) {
  const { hour, minute, second } = state;
  if (second) {
    return { ...state, second: second - 1};
  } else if (minute) {
    return { ...state, minute: minute - 1, second: 59 };
  } else if (hour) {
    return { hour: hour - 1, munute: 59, second: 59 }
  } else {
    return state;
  }
}
