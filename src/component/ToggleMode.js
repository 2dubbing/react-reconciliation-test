import React from "react";

const ToggleMode = React.memo(function({ mode, changeMode }) {
  React.useEffect(() => {
    return () => {
      console.log(`ToggleMode is unmount`);
    }
  }, []);

  return (
    <div className="toggle-wrapper">
      <label>{mode}</label>
      <button onClick={changeMode}>변경</button>
    </div>
  );
});

export default ToggleMode;
