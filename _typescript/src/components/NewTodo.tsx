import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from '../styles/NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  // the HTMLInputElement is one of many other HTML types like <HTMLButtonElement> or <HTMLAnchorElement>
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // the question mark will be automatically added because the ref is not necessarily set to a value YET when we use it
    // But it will be when submitHandler() is called.
    // We can also replace the ? with a ! --- this is telling Typescript that you are CERTAIN that there will be no null or undefined value. Whereas the ? says that if there is no value, that we want to return null or undefined.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
