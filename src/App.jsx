import { HelloPart, TodoForm, TodoList } from "./modules";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-void relative overflow-hidden">
      <HelloPart />
      
      <div className="page-enter-bottom glass-card liquid w-full max-w-xl min-h-125 p-8 sm:p-10 rounded-[42px] relative z-10 transition-all duration-300">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
