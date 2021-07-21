import React, {useEffect, useState} from "../../../_snowpack/pkg/react.js";
import AceEditor from "../../../_snowpack/pkg/react-ace.js";
import "../../../_snowpack/pkg/ace-builds/src-noconflict/mode-yaml.js";
import "../../../_snowpack/pkg/ace-builds/src-noconflict/theme-chrome.js";
const CodeEditor = (props) => {
  const [code, setCode] = useState(props.value);
  useEffect(() => {
    props.onChange(code);
  }, [code]);
  return /* @__PURE__ */ React.createElement(AceEditor, {
    mode: "yaml",
    theme: "chrome",
    width: "100%",
    height: "100%",
    value: code,
    onChange: setCode,
    showPrintMargin: false
  });
};
export default CodeEditor;
