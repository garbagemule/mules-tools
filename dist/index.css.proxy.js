// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "html, body {\n  width: 100vw;\n  height: 100vh;\n\n  margin: 0;\n  padding: 0;\n\n  color: #24292e;\n  font-family:\n    '-apple-system',\n    'BlinkMacSystemFont',\n    'Segoe UI',\n    'Helvetica',\n    'Arial',\n    'sans-serif',\n    'Apple Color Emoji',\n    'Segoe UI Emoji'\n  ;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 8px;\n\n  border-bottom: 1px solid lightgrey;\n\n  font-weight: 400;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}