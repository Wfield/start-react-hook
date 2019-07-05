import React, { useEffect, useReducer } from 'react';
import uuidv4 from 'uuid/v4';
import Todo from './Todo';
import './TodoList.css';

const initContent = {
	inputContent: ''
};

const initList = {
	list: []
}

function contentReducer(state, action) {
	switch (action.type) {
		case 'INPUT':
			return { inputContent: action.content };
		case 'RESET':
			return { inputContent: ''};
		default:
			throw new Error('Cannot find action type');
	}
}

function listReducer(state, action) {
	switch (action.type) {
		case 'INIT':
			return { list: [...action.list] };
		case 'ADD':
			return { list: [...state.list, { id: action.itemId, content: action.itemContent, status: 'Undone' }] };
		case 'DELETE':
			const pos =  state.list.findIndex((item) => item.id === action.itemId);
			return { list: [...state.list.slice(0, pos), ...state.list.slice(pos + 1)] };
		case 'DONE':
			const array = state.list.map(item => {
				if(item.id === action.itemId) {
					item.status = 'Done';
				}
				return item;
			});
			return { list: array };
		default:
			throw new Error('Cannot find action type');
	}
}

function TodoList() {
	const [contentState, contentDispatch] = useReducer(contentReducer, initContent);
	const [listState, listDispatch] = useReducer(listReducer, initList)
	const undoneNum = listState.list.filter(o => o.status === 'Undone').length;
	const content = contentState.inputContent;

	useEffect(() => {
		// fetch('')
		// .then(rowData => {
		// 	return rowData.json();
		// })
		// .then(data => {
		// 	const list = data.result || [];
		// 	listDispatch({ type: 'INIT', list });
		// });
	}, []);

	function handleCreate() {
		listDispatch({type: 'ADD', itemContent: content, itemId: uuidv4()});
		contentDispatch({type: 'RESET'});
	}

	function handleInput(e) {
		contentDispatch({type: 'INPUT', content: e.target.value});
	}

	return (
		<>
			<p>you have {undoneNum} undone todo</p>
			<input className='contentInput' value={content} onChange={handleInput} />
			<button className='createBtn' onClick={handleCreate}>create</button>
			{listState.list.map((item, index) => (
				<Todo key={index} id={item.id} content={item.content} status={item.status} dispatch={listDispatch} />
			))}
		</>
	);
}

export default TodoList;