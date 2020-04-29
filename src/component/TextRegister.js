import React from "react";

const TextRegister = React.memo(function({ addDatas }) {
  const [text, setText] = React.useState("");

  const registText = () => {
    if (text === "") return;
    addDatas(text);
    setText("");
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.currentTarget.value)}
        onKeyDown={e => {
          if (e.keyCode !== 13) return;
          registText();
        }}
      />
      <button onClick={() => registText()}>등록</button>
    </div>
  );
});

export default TextRegister;
