import React from "../../../_snowpack/pkg/react.js";
import "./WaveDistributionChart.css.proxy.js";
const KNOWN_TYPES = [
  "default",
  "special",
  "swarm",
  "supply",
  "upgrade",
  "boss"
];
const WaveDistributionChart = (props) => {
  const all = props.recurrent.concat(props.single);
  const distribution = all.reduce((map, w) => {
    if (map[w.type] == null) {
      map[w.type] = [];
    }
    map[w.type].push(w);
    return map;
  }, {});
  const counts = Object.keys(distribution).map((type) => distribution[type].length);
  const max = Math.max(...counts);
  const missing = Object.keys(distribution).filter((type) => !KNOWN_TYPES.includes(type));
  const types = KNOWN_TYPES.concat(missing);
  return /* @__PURE__ */ React.createElement("table", {
    className: "wave-distribution-chart"
  }, /* @__PURE__ */ React.createElement("tbody", null, types.map((type) => /* @__PURE__ */ React.createElement(TypeRow, {
    key: `entry-${type}`,
    type,
    max,
    distribution
  }))));
};
const TypeRow = (props) => {
  const {type, max, distribution} = props;
  const count = (distribution[type] || []).length;
  const percent = count / max;
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, type), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", {
    className: "bar",
    style: {flex: `${Math.floor(percent * 100)}% 0 0`}
  }), /* @__PURE__ */ React.createElement("div", {
    className: "count"
  }, count)));
};
export default WaveDistributionChart;
