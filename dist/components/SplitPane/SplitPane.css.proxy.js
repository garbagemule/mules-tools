// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".split-pane-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n}\n\n.split-pane-content {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n}\n\n.split-pane-content .pane {\n  overflow: auto;\n}\n\n.split-pane-divider {\n  flex: 20px 0 0;\n}\n.split-pane-divider .slider {\n  width: calc(100% + 8px);\n  height: 100%;\n\n  margin: 0 4px 0 -4px;\n  padding: 0;\n\n  -webkit-appearance: none;\n  background-color: whitesmoke;\n  outline: none;\n  opacity: 0.5;\n}\n.split-pane-divider .slider:hover {\n  opacity: 1;\n}\n.split-pane-divider .slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n\n  width: 8px;\n  height: 20px;\n\n  background-color: lightgrey;\n  cursor: pointer;\n}\n.split-pane-divider .slider::-moz-range-thumb {\n  width: 8px;\n  height: 20px;\n\n  cursor: pointer;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}