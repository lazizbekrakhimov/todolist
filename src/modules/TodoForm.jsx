import { Plus } from "lucide-react"
import { useContext } from "react";
import { Context } from "../context/Context";

const TodoForm = () => {
    const { todos, setTodos } = useContext(Context);
    
    // submit, create todos
    function handleSubmit(evt) {
        evt.preventDefault();
        const data = {
            id: todos[todos.length - 1]?.id ? todos[todos.length - 1]?.id + 1 : 1,
            content: evt.target.todo.value,
            isCompleted: false
        }
        setTodos(last => [...last, data])
        evt.target.reset()
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className="flex gap-4 mb-10">
            <input
                name="todo"
                type="text"
                required
                placeholder="Enter your tasks"
                className="flex-1 px-6 py-4 rounded-3xl bg-white/5 backdrop-blur-xl text-white placeholder-white/60 outline-0 focus:ring-2 focus:ring-white/20 transition text-base sm:text-lg"
            />

            <button
                type="submit"
                className="glass-btn liquid-btn w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center text-white cursor-pointer"
            >
                <Plus size={24} />
            </button>
        </form>
    )
}

export default TodoForm