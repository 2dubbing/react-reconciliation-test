import React from "react";
import LAYOUT_TYPE from "../constant/layoutType";

const Layout = React.memo(function({ type, children }) {
  return (
    type === LAYOUT_TYPE.DEFAULT ? (
      <div className="layout default">
        {children}
      </div>
    ) : (
      <article className="layout border">
        {children}
      </article>
    )
  );
});

export default Layout;