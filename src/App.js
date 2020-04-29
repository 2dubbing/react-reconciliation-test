import React from "react";
import "./styles.css";
import TextRegister from "./component/TextRegister";
import Row from "./component/Row";
import ToggleMode from "./component/ToggleMode";

const MODE_STATUS = {
  ID: "ID",
  INDEX: "INDEX"
};

export default function App() {
  const [mode, setMode] = React.useState(MODE_STATUS.ID);
  const [datas, setDatas] = React.useState([]);

  return (
    <div className="App">
      <ToggleMode
        mode={mode}
        changeMode={() => {
          console.log("====change mode====");

          setMode(mode === MODE_STATUS.ID ? MODE_STATUS.INDEX : MODE_STATUS.ID);
        }}
      />
      <TextRegister
        addDatas={title => {
          setDatas([
            ...datas,
            {
              id: Date.now(),
              title
            }
          ]);
        }}
      />

      <div className="data-list-wrapper">
        {datas.map(({ id, title }, index) => (
          <Row
            key={mode === MODE_STATUS.ID ? id : index}
            title={title}
            removeItem={() => {
              console.log("====remove item====");

              const num = datas.findIndex(item => item.id === id);
              setDatas([...datas.slice(0, num), ...datas.slice(num + 1, datas.length)]);
            }}
          />
        ))}
      </div>
    </div>
  );
}
