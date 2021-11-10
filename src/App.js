import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <ul>
          <p className="title">未完了のTODO</p>
          <div className="list-row">
            <li>あああああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <ul>
          <p className="title">未完了のTODO</p>
          <div className="list-row">
            <li>ううううううう</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>えええええええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
