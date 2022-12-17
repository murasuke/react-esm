// CDN経由でReactを読み込む(ESModuleであればブラウザから直接利用可能)
import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const h = React.createElement;

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((n) => n + 1);
  return (
    // jsxはトランスパイルが必要なためReact.createElement()を直接呼び出す
    h(
      React.Fragment,
      null,
      h("div", null, "Count: ", count),
      h("button", { onClick: handleClick }, "Increment")
    )
  );
};

ReactDOM.render(h(Counter), document.getElementById("app"));
