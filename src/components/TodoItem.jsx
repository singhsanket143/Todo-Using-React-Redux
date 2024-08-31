function TodoItem({ text, isCompleted }) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={isCompleted} />
            <p>{text}</p>
            <button>X</button>
        </div>
    )
}

export default TodoItem;