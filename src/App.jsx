import TaskList from "./components/task-list.jsx";
import TaskForm from "./components/task-form.jsx";

function App() {
  return (
    <main className='bg-zinc-900 min-h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
export default App;
