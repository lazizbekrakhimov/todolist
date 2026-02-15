import { Check, Pencil, Trash2 } from "lucide-react"
import { useContext } from "react";
import { Context } from "../context/Context";

const TodoItem = ({ index, item }) => {
    const { todos, setTodos } = useContext(Context);

    // edit
    function handleEdit(ind) {
        const newValue = prompt(`Do you want to edit this task?\n\nType the new value below:`);
        if (newValue && newValue.trim() !== "") {
            todos[ind].content = newValue.trim();
            setTodos(last => [...last]);
        }
    }

    // status change
    function handleStatusChange(evt, ind) {
        setTodos(prev =>
            prev.map((todo, i) =>
                i === ind
                    ? { ...todo, isCompleted: evt.target.checked }
                    : todo
            )
        );
    }

    // delete
    function handleDelete(ind) {
        const confirmDelete = confirm(`Are you sure you want to permanently delete this task?`);
        if (confirmDelete) {
            todos.splice(ind, 1)
            setTodos(last => [...last])
        }
    }

    return (
        <li className="task-card liquid-small flex justify-between items-center p-6 sm:p-7 rounded-3xl">

            <div className="flex items-start gap-7 flex-1">
                <label className="relative flex items-center justify-center w-6 h-6 sm:w-9 sm:h-9 cursor-pointer shrink-0">
                    <input
                        onChange={(evt) => handleStatusChange(evt, index)}
                        checked={item.isCompleted}
                        type="checkbox"
                        className="peer appearance-none w-7 h-7 rounded-full border border-white/30 bg-white/5 backdrop-blur-xl transition duration-200 checked:bg-white checked:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                    />
                    <Check
                        size={18}
                        className="absolute text-black opacity-0 peer-checked:opacity-100 transition duration-200"
                    />
                </label>

                <span className="text-white/90 wrap-break-word break-all font-medium tracking-wide text-[22px] sm:text-lg">
                    {item.content}
                </span>
            </div>

            <div className="flex ml-5 gap-5 shrink-0 items-start">
                <button onClick={() => handleEdit(index)} className="text-white/40 hover:text-white transition cursor-pointer">
                    <Pencil size={24} />
                </button>

                <button onClick={() => handleDelete(index)} className="text-white/40 hover:text-red-400 transition cursor-pointer">
                    <Trash2 size={24} />
                </button>
            </div>

        </li>
    )
}

export default TodoItem