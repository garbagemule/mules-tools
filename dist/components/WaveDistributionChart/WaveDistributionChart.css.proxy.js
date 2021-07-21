// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "table.wave-distribution-chart {\n  table-layout: fixed;\n  border-collapse: separate;\n\n  min-width: 200px;\n  width: 70%;\n\n  margin-bottom: 16px;\n\n  font-size: 11px;\n  line-height: 1.5;\n}\n\ntable.wave-distribution-chart th {\n  width: 5.5em;\n\n  margin: 0;\n  padding: 0 4px 0 0;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  font-weight: normal;\n  text-align: right;\n}\n\ntable.wave-distribution-chart td {\n  display: flex;\n  height: 16px;\n\n  margin: 0;\n  padding: 0;\n}\n\ntable.wave-distribution-chart td .bar {\n  flex: 4px 0 0;\n\n  min-width: 4px;\n\n  background: lightgrey;\n}\n\ntable.wave-distribution-chart td .count {\n  flex: 1;\n\n  padding-left: 4px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}