import React from 'react';
import './Todo.css';

function Todo(props) {
	const { dispatch, id } = props;

	function handleDelete() {
		dispatch({type: 'DELETE', itemId: id});
	}

	function handleDone() {
		dispatch({type: 'DONE', itemId: id});
	}

	return (
		<div className='todo'>
			<div className='content'>{props.content}</div>
			<div className='statusDisplay' style={props.status === 'Done' ? {backgroundColor: '#3980004d'} : {backgroundColor: '#acce164d'}}>
				{props.status}
			</div>
			<div className='actions'>
				<button className='deleteBtn' onClick={handleDelete}>delete</button>
				<button className='doneBtn' onClick={handleDone}>done</button>
			</div>
		</div>
	);
}

export default Todo;