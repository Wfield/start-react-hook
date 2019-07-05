import React, { useState } from 'react';

function StateHook(props) {
  // 声明一个叫 “count” 的 state 变量。
	const [count, setCount] = useState(0);
	
	function handleClick(c) {
		setCount(c + 1);
		props.getCount(c);
	}

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick(count)}>
        Click me
      </button>
    </div>
  );
}

export default StateHook;