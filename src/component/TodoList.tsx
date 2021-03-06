import * as React from 'react';
import TodoListItem from './TodoListItem';

const { memo } = React;

const TodoList = memo(({ todos, handleDelete, handleUpdate, handleCheck }) => {
	return (
		<>
			<div>
				{todos.map((todo) => (
					<TodoListItem
						todo={todo}
						key={todo.id}
						handleDelete={handleDelete}
						handleUpdate={handleUpdate}
						handleCheck={handleCheck}
					/>
				))}
			</div>
		</>
	);
});

export default TodoList;
