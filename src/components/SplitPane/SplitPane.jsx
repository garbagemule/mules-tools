import React, {useState} from 'react'

import './SplitPane.css'

const SplitPane = ({ children }) => {
  const [percent, setPercent] = useState(0.5)

  const onDividerChange = (e) => {
    setPercent(e.target.value / 100)
  }

  switch (children.length) {
    case 0: {
      return null
    }
    case 1: {
      return children[0]
    }
    case 2: {
      const [left, right] = children
      return (
        <div className="split-pane-container">
          <div className="split-pane-content">
            <div className="pane" style={{ flex: `calc(${Math.round(percent * 100)}%) 0 0` }}>
              { left }
            </div>
            <div className="pane" style={{ flex: `calc(${Math.round((1 - percent) * 100)}%) 0 0` }}>
              { right }
            </div>
          </div>
          <div className="split-pane-divider">
            <input
              className="slider"
              type="range"
              min="0"
              max="100"
              value={Math.round(percent * 100)}
              onChange={onDividerChange}
            />
          </div>
        </div>
      )
    }
    default: {
      throw new Error(`unsupported child count: ${children.length}`)
    }
  }
}

export default SplitPane
