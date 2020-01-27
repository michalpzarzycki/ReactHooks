import React from 'react';

// in Timer, we are calculating the date and putting it in state a lot
// this results in a re-render for every state update

// we had a function handleIncrementCount to increment the state 'count'...
function Timer() {
    const [time, setTime] = React.useState();
    const [count, setCount] = React.useState(0);
  
    // ... but unless we wrap it in useCallback, the function is
    // recreated for every single re-render (bad performance hit)
    // useCallback hook returns a callback that isn't recreated every time
    const inc = React.useCallback(
      function handleIncrementCount() {
        setCount(prevCount => prevCount + 1);
      },
      // useCallback accepts a second arg of a dependencies array like useEffect
      // useCallback will only run if any dependency changes (here it's 'setCount')
      [setCount]
    );
  
    React.useEffect(() => {
      const timeout = setTimeout(() => {
        const currentTime = JSON.stringify(new Date(Date.now()));
        setTime(currentTime);
      }, 300);
  
      return () => {
        clearTimeout(timeout);
      };
    }, [time]);
  
    return (
      <div>
        <p>The current time is: {time}</p>
        <p>Count: {count}</p>
        <button onClick={inc}>+</button>
      </div>
    );
  }

  export default Timer;