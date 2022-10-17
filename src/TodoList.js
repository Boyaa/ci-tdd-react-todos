import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
    return (
    <ul>
        {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
        ) )}  {/* map은 for문과 비슷한 효과*/}
    </ul>
    );
};

export default TodoList;