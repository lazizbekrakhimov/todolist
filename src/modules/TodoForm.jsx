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
            isCompleted: false,
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
                className="flex-1 px-6 py-4 rounded-3xl bg-linear-to-br from-[rgba(65,65,65,0.7)] to-[rgba(55,55,55,0.8)] border border-[rgba(110,110,110,0.25)] text-white placeholder-white/40 outline-none focus:border-[rgba(130,130,130,0.4)] focus:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 text-base sm:text-lg backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"
            />

            <button
                type="submit"
                className="liquid-btn w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center text-white/90 hover:text-white cursor-pointer transition-all duration-300"
            >
                <Plus size={26} strokeWidth={2.5} />
            </button>
        </form>
    )
}

export default TodoForm