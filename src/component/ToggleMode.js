import React from "react";

const ToggleMode = React.memo(function({ mode, changeMode }) {
  return (
    <div className="toggle-wrapper">
      <label>현재 설정된 key 값: {mode}</label>
      <button onClick={changeMode}>변경</button>
    </div>
  );
});

export default ToggleMode;
