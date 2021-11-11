import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const CompleteTodo = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div style={style} className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
