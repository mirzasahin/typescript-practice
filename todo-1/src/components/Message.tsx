import { Todos } from "../types/type";

type IProps = {
  todos: Todos[];
  deleteMessage: (id: number) => void;
};

const Message: React.FC<IProps> = ({ todos, deleteMessage }) => {
  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            {todo.message} -{" "}
            <span
              onClick={() => deleteMessage(todo.id)}
              style={{ cursor: "pointer" }}
            >
              x
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Message;
