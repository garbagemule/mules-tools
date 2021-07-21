// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".wave-analyzer-container {\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n}\n\n.wave-analyzer-header {\n  flex: 0;\n\n  margin-bottom: 8px;\n}\n\n.wave-analyzer-content {\n  flex: 1;\n}\n\n.wave-analyzer-details {\n  flex: 1;\n\n  padding: 0 0 0 1em;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}