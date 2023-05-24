const Item = (props) => {
  return (
    <div
      style={{
        border: "1px solid #444",
        padding: "10px",
        margin: "50px",
      }}
    >
      <input
        type="checkbox"
        checked={props.isCompleted}
        onChange={() => props.handleToggleTodo()}
      />
      <span>{props.label}</span>
    </div>
  );
};

export default Item;
