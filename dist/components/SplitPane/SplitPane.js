import React, {useState} from "../../../_snowpack/pkg/react.js";
import "./SplitPane.css.proxy.js";
const SplitPane = ({children}) => {
  const [percent, setPercent] = useState(0.5);
  const onDividerChange = (e) => {
    setPercent(e.target.value / 100);
  };
  switch (children.length) {
    case 0: {
      return null;
    }
    case 1: {
      return children[0];
    }
    case 2: {
      const [left, right] = children;
      return /* @__PURE__ */ React.createElement("div", {
        className: "split-pane-container"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "split-pane-content"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "pane",
        style: {flex: `calc(${Math.round(percent * 100)}%) 0 0`}
      }, left), /* @__PURE__ */ React.createElement("div", {
        className: "pane",
        style: {flex: `calc(${Math.round((1 - percent) * 100)}%) 0 0`}
      }, right)), /* @__PURE__ */ React.createElement("div", {
        className: "split-pane-divider"
      }, /* @__PURE__ */ React.createElement("input", {
        className: "slider",
        type: "range",
        min: "0",
        max: "100",
        value: Math.round(percent * 100),
        onChange: onDividerChange
      })));
    }
    default: {
      throw new Error(`unsupported child count: ${children.length}`);
    }
  }
};
export default SplitPane;
