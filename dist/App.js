import React, {useState} from "../_snowpack/pkg/react.js";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "../_snowpack/pkg/react-router-dom.js";
import Home from "./pages/Home/Home.js";
import WaveAnalyzer from "./pages/WaveAnalyzer/index.js";
import maximizeIcon from "./icons/maximize.svg.proxy.js";
import restoreIcon from "./icons/restore.svg.proxy.js";
import "./App.css.proxy.js";
const App = () => {
  const [maximized, setMaximized] = useState(false);
  return /* @__PURE__ */ React.createElement(Router, {
    basename: "/"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "app"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("span", {
    className: "title"
  }, "Mule's Tools"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/wave-analyzer"
  }, "Wave Analyzer")))), /* @__PURE__ */ React.createElement("main", {
    className: maximized ? "" : "sheet"
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/"
  }, /* @__PURE__ */ React.createElement(Home, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/wave-analyzer"
  }, /* @__PURE__ */ React.createElement(WaveAnalyzer, null)))), /* @__PURE__ */ React.createElement("img", {
    className: "maximize-button",
    src: maximized ? restoreIcon : maximizeIcon,
    alt: maximized ? "Restore" : "Maximize",
    onClick: () => setMaximized(!maximized)
  })));
};
export default App;
