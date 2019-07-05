import React, { useState } from 'react';
import StateHook from './StateHook';

function Container() {
	const [count, setCount] = useState(0);

	function getCount(count) {
		setCount(count);
	}

	return (
		<>
			<p>Upper component received: {count}</p>
			<StateHook getCount={getCount} />
		</>
	)
}

export default Container;