// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app {\n  display: flex;\n  flex-direction: column;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: whitesmoke;\n}\n\n.app nav {\n  flex: 0;\n\n  color: white;\n  background-color: black;\n  box-shadow: 0 0 5px black;\n\n  z-index: 1;\n}\n\n.app nav ul {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  list-style-type: none;\n}\n\n.app nav .title {\n  float: right;\n  padding: 0.5em 1em;\n}\n\n.app nav ul li {\n  float: left;\n}\n\n.app nav ul li a {\n  display: block;\n  padding: 0.5em 1em;\n\n  color: white;\n  text-align: center;\n  text-decoration: none;\n}\n.app nav ul li a:hover {\n  background-color: #252525;\n}\n\n.app main {\n  flex: 1;\n\n  padding: 1em 1em 0 1em;\n  overflow: auto;\n\n  background-color: white;\n  box-shadow: 0 0 20px darkgray;\n}\n\n.app main.sheet {\n  width: 920px;\n\n  margin: auto;\n}\n\n.app .maximize-button {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n\n  height: 16px;\n\n  padding: 4px;\n\n  cursor: pointer;\n}\n.app .maximize-button:hover {\n  height: 18px;\n\n  padding: 3px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}