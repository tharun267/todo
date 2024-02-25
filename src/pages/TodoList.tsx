export const TodoList = ({ todoList }: { todoList: { name: string; status: boolean }[] }) => {
    return (
        <ul>
            {todoList.map((todoItem, i) => <li key={i} style={{marginBottom: '10px'}}>{todoItem.name}</li>)}
        </ul>
    )
}