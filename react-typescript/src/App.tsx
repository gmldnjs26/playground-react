import Todos from "./components/Todos";
import Todo from "./models/todo";

const todoList = [new Todo("react"), new Todo("good")];

const App = () => {
  return (
    <div className="App">
      <Todos items={todoList} />
    </div>
  );
};

export default App;
