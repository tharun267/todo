import React from "react";

export const TodoForm = ({ addTodoTask }: { addTodoTask: (todoTask: { name: string; status: boolean; }) => void }) => {
    const [name, setName] = React.useState('');
    return (
        <>
            <input name="todoTask" placeholder="Add Todo Task" value={name} onChange={e => setName(e.target.value)} />
            <button name="addTask" style={{
                marginLeft: '10px'
            }} onClick={() => addTodoTask({ name, status: false })} >Add Task</button>
        </>
    )
}