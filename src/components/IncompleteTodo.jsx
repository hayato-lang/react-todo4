import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const IncompleteTodo = (props) => {
  const { todo, onClickComplete, onClickDelete } = props;
  return (
    <div style={style} className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
