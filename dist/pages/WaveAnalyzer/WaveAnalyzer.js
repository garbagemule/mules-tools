import React, {Fragment, useEffect, useState} from "../../../_snowpack/pkg/react.js";
import yaml from "../../../_snowpack/pkg/js-yaml.js";
import SplitPane from "../../components/SplitPane/index.js";
import CodeEditor from "../../components/CodeEditor/index.js";
import WaveDistributionChart from "../../components/WaveDistributionChart/index.js";
import WaveProgressionChart from "../../components/WaveProgressionChart/index.js";
import sample from "../../components/CodeEditor/sample.js";
import "./WaveAnalyzer.css.proxy.js";
const WaveAnalyzer = () => {
  const [content, setContent] = useState(sample);
  const [doc, setDoc] = useState({});
  const [recurrent, setRecurrent] = useState([]);
  const [single, setSingle] = useState([]);
  useEffect(() => {
    try {
      const result = yaml.load(content);
      setDoc(result);
    } catch (e) {
    }
  }, [content]);
  useEffect(() => {
    const waves = doc["waves"];
    if (waves == null) {
      return;
    }
    if (waves["recurrent"] != null) {
      const section = waves["recurrent"];
      const result = [];
      Object.keys(section).forEach((key) => result.push({
        id: key,
        ...section[key]
      }));
      setRecurrent(result);
    }
    if (waves["single"] != null) {
      const section = waves["single"];
      const result = [];
      Object.keys(section).forEach((key) => result.push({
        id: key,
        ...section[key]
      }));
      setSingle(result);
    }
  }, [doc]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "wave-analyzer-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wave-analyzer-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Wave Analyzer"), /* @__PURE__ */ React.createElement("p", null, "Paste your waves section into the text area on the left and get a visualization of its progression and a rundown of the composition on the right.")), /* @__PURE__ */ React.createElement("div", {
    className: "wave-analyzer-content"
  }, /* @__PURE__ */ React.createElement(SplitPane, null, /* @__PURE__ */ React.createElement(CodeEditor, {
    value: content,
    onChange: setContent
  }), /* @__PURE__ */ React.createElement("div", {
    className: "wave-analyzer-details"
  }, /* @__PURE__ */ React.createElement("h3", null, "Wave distribution"), /* @__PURE__ */ React.createElement("p", null, "Bar graph showing the distribution of wave types across all waves in the configuration."), /* @__PURE__ */ React.createElement(WaveDistributionChart, {
    recurrent,
    single
  }), /* @__PURE__ */ React.createElement("h3", null, "Wave progression"), /* @__PURE__ */ React.createElement("p", null, "This chart lists all the waves of the configuration with single waves on top (ordered by ", /* @__PURE__ */ React.createElement("code", null, "wave"), ") and recurrent waves at the bottom (ordered by ", /* @__PURE__ */ React.createElement("code", null, "priority"), "). For each wave number (x-axis), the chart marks the candidates and the winner."), /* @__PURE__ */ React.createElement(WaveProgressionChart, {
    recurrent,
    single,
    count: 30
  })))));
};
export default WaveAnalyzer;
