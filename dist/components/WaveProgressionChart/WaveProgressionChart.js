import React, {Fragment, useState} from "../../../_snowpack/pkg/react.js";
import "./WaveProgressionChart.css.proxy.js";
const WaveProgressionChart = (props) => {
  const [count, setCount] = useState(props.count || 20);
  const recurrent = props.recurrent.slice().sort((a, b) => b.priority - a.priority);
  const single = props.single.slice().sort((a, b) => b.wave - a.wave);
  const waves = [];
  for (let i = 0; i < count; i++) {
    const n = i + 1;
    const entry = {
      winner: null,
      candidates: []
    };
    for (let w of single) {
      if (w.wave === n) {
        entry.winner = w;
        entry.candidates.push(w);
        break;
      }
    }
    for (let w of recurrent) {
      if (n >= (w.wave || 1) && n % w.frequency === 0) {
        if (entry.winner == null) {
          entry.winner = w;
        }
        entry.candidates.push(w);
      }
    }
    waves.push(entry);
  }
  return /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "wave-progression-chart-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "legend"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "wave-progression-chart"
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    className: "cell tiny winner"
  }), /* @__PURE__ */ React.createElement("th", {
    className: "left-align"
  }, "winner")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    className: "cell tiny candidate"
  }), /* @__PURE__ */ React.createElement("th", {
    className: "left-align"
  }, "candidate")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    className: "cell tiny miss"
  }), /* @__PURE__ */ React.createElement("th", {
    className: "left-align"
  }, "miss"))))), /* @__PURE__ */ React.createElement("div", {
    className: "settings"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "wave-count"
  }, "Wave count: "), /* @__PURE__ */ React.createElement("input", {
    id: "wave-count",
    type: "number",
    value: count,
    onChange: (e) => setCount(parseInt(e.target.value))
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "wave-progression-chart-container"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "wave-progression-chart"
  }, /* @__PURE__ */ React.createElement("tbody", null, single.map((w) => /* @__PURE__ */ React.createElement(WaveRow, {
    key: `single-${w.id}`,
    wave: w,
    waves,
    count
  })), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: count + 1
  }, /* @__PURE__ */ React.createElement("hr", null))), recurrent.map((w) => /* @__PURE__ */ React.createElement(WaveRow, {
    key: `recurrent-${w.id}`,
    wave: w,
    waves,
    count
  })), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: count + 1
  }, /* @__PURE__ */ React.createElement("hr", null))), /* @__PURE__ */ React.createElement(WaveNumberRow, {
    count
  })))));
};
const WaveRow = (props) => {
  const {wave, waves, count} = props;
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, wave.id), [...Array(count).keys()].map((i) => /* @__PURE__ */ React.createElement("td", {
    key: `${wave.id}-${i}`,
    className: getCellClass(i, wave, waves)
  })));
};
const getCellClass = (i, w, waves) => {
  if (waves[i].winner === w) {
    return "cell winner";
  }
  if (waves[i].candidates.includes(w)) {
    return "cell candidate";
  }
  return "cell miss";
};
const WaveNumberRow = (props) => {
  const {count} = props;
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null), [...Array(count).keys()].map((i) => /* @__PURE__ */ React.createElement("td", {
    key: `wave-number-${i}`
  }, `${i + 1 < 10 ? "0" : ""}${i + 1}`)));
};
export default WaveProgressionChart;
