import React, {Fragment} from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
const Home = () => {
  return /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Mule's Tools!"), /* @__PURE__ */ React.createElement("p", null, "This page contains a small collection of little tools and utilities I think are useful enough to share with the world."), /* @__PURE__ */ React.createElement("p", null, "For now, it's just the ", /* @__PURE__ */ React.createElement(Link, {
    to: "/wave-analyzer"
  }, "wave analyzer"), "."), /* @__PURE__ */ React.createElement("p", null, "Happy hacking!"));
};
export default Home;
