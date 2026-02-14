import { useContext } from "react";
import { Context } from "../context/Context";
import TodoItem from "../components/TodoItem";
import { FiCoffee, FiInbox } from "react-icons/fi";

const TodoList = () => {
    const { todos } = useContext(Context);

    return (
        <div className="mt-6">
            {todos.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-white/50 transition-all duration-500 animate-fadeIn">
                    <FiInbox className="text-5xl mb-4 text-white/30" />
                    <p className="text-lg tracking-wide">No tasks yet</p>
                    <span className="text-sm flex items-center gap-1 text-white/30 mt-1">
                        Add something and start being productive <FiCoffee className="text-white/30" />
                    </span>
                </div>
            ) : (
                <ul className="space-y-6 transition-all duration-500">
                    {todos.map((item, index) => (
                        <TodoItem key={index} index={index} item={item} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;
