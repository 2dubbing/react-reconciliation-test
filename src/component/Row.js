import React from "react";

const Row = React.memo(({ title, removeItem }) => {
  React.useEffect(() => {
    return () => {
      console.log(`title: ${title} Row is unmount`);
    };
  }, [title]);

  return (
    <li>
      {title}
      <button onClick={removeItem}>삭제</button>
    </li>
  );
});

export default Row;
