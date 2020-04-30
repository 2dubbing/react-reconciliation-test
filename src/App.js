import React from "react";
import "./styles.css";
import TextRegister from "./component/TextRegister";
import Row from "./component/Row";
import ToggleMode from "./component/ToggleMode";
import Layout from "./component/Layout";
import LAYOUT_TYPE from "./constant/layoutType";
import MODE_STATUS from "./constant/modeStatus";


export default function App() {
  const [layoutType, setLayoutType] = React.useState(LAYOUT_TYPE.DEFAULT);
  const [mode, setMode] = React.useState(MODE_STATUS.ID);
  const [datas, setDatas] = React.useState([]);

  return (
    <div className="App">
      <Layout type={layoutType}>
        <ToggleMode
          mode={`레이아웃 타입: ${layoutType}`}
          changeMode={() => {
            console.log("====change mode====");

            setLayoutType(layoutType === LAYOUT_TYPE.DEFAULT ? LAYOUT_TYPE.BORDER : LAYOUT_TYPE.DEFAULT);
          }}
        />
        <ToggleMode
          mode={`현재 설정된 key 값: ${mode}`}
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
      </Layout>
    </div>
  );
}
