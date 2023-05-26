import { useState, useEffect } from "react";
import Input from "./input";
import Item from "./item";

const TodoList = () => {
  const [list, setList] = useState([
    {
      label: "wash cloths",
      isCompleted: false,
    },
  ]);

  const [val, setVal] = useState();

  useEffect(() => {
    console.log(
      "for all kinds of updates ( mount/unmount/state update/ prop update"
    );
  });

  useEffect(() => {
    console.log("mount / unmount");
  }, []); // [] = dependency array

  useEffect(() => {
    console.log("list/val update");
  }, [list, val]); //  [list, val] = dependency array

  return (
    <div
      style={{
        border: "1px solid #444",
        padding: "10px",
        margin: "50px",
        width: "300px",
      }}
    >
      <h1>TodoList</h1>
      <div>
        <div>Total = {list.length}</div>
        <div>
          Completed = {list.filter(({ isCompleted }) => isCompleted).length}
        </div>
        <div onClick={() => setVal(+new Date())}>
          Not Completed ={" "}
          {list.filter(({ isCompleted }) => !isCompleted).length}
        </div>
      </div>
      <Input
        handleTodoAddition={(label) => {
          setList([
            ...list,
            {
              label,
              isCompleted: false,
            },
          ]);
        }}
      />
      <div>
        {list.map((todoItem, index) => (
          <Item
            key={index}
            label={todoItem.label}
            isCompleted={todoItem.isCompleted}
            handleToggleTodo={() => {
              const tempList = [...list];
              tempList[index].isCompleted = !tempList[index].isCompleted;
              setList(tempList);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
