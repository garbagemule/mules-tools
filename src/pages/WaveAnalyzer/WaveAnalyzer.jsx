import React, { Fragment, useEffect, useState } from 'react'
import yaml from 'js-yaml'

import SplitPane from '../../components/SplitPane'
import CodeEditor from '../../components/CodeEditor'
import WaveDistributionChart from '../../components/WaveDistributionChart'
import WaveProgressionChart from '../../components/WaveProgressionChart'

import sample from '../../components/CodeEditor/sample'

import './WaveAnalyzer.css'

const WaveAnalyzer = () => {
  const [content, setContent] = useState(sample)
  const [doc, setDoc] = useState({})
  const [arena, setArena] = useState('default')
  const [recurrent, setRecurrent] = useState([])
  const [single, setSingle] = useState([])

  useEffect(() => {
    try {
      const result = yaml.load(content)
      if (result['arenas'] != null) {
        setDoc(result)
      } else if (result['waves'] != null) {
        const wrapper = { arenas: { default: result } }
        setDoc(wrapper)
      }
    } catch (e) {
      // Swallow
    }
  }, [content])

  useEffect(() => {
    if (doc == null) {
      return
    }

    const arenas = doc['arenas']
    if (arenas == null) {
      return
    }
    const names = Object.keys(arenas)
    if (names.length === 0) {
      return
    }
    if (!names.includes(arena)) {
      setArena(names[0])
      return
    }
    const selected = arenas[arena]
    if (selected == null) {
      return
    }
    const waves = selected['waves']
    if (waves == null) {
      return
    }

    if (waves['recurrent'] != null) {
      const section = waves['recurrent']
      const result = []
      Object.keys(section).forEach(key => result.push({
        id: key,
        ...section[key],
      }))
      setRecurrent(result)
    }

    if (waves['single'] != null) {
      const section = waves['single']
      const result = []
      Object.keys(section).forEach(key => result.push({
        id: key,
        ...section[key],
      }))
      setSingle(result)
    }
  }, [doc, arena])

  return (
    <div className="wave-analyzer-container">
      <div className="wave-analyzer-header">
        <h1>Wave Analyzer</h1>
        <p>
          Paste your config-file into the text area on the left, then pick an
          arena on the right to get a visualization of its progression and a
          rundown of its type distribution.
        </p>
      </div>

      <div className="wave-analyzer-content">
        <SplitPane>
          <CodeEditor
            value={content}
            onChange={setContent}
          />

          <div className="wave-analyzer-details">
            <h3>Arena selection</h3>
            <p>
              Select an arena name from the dropdown box.
            </p>
            <ArenaSelection
              doc={doc}
              arena={arena}
              setArena={setArena}
            />

            <h3>Wave distribution</h3>
            <p>
              Bar graph showing the distribution of wave types across all waves
              in the configuration.
            </p>
            <WaveDistributionChart
              recurrent={recurrent}
              single={single}
            />

            <h3>Wave progression</h3>
            <p>
              This chart lists all the waves of the configuration with single
              waves on top (ordered by <code>wave</code>) and recurrent waves
              at the bottom (ordered by <code>priority</code>). For each wave
              number (x-axis), the chart marks the candidates and the winner.
            </p>
            <WaveProgressionChart
              recurrent={recurrent}
              single={single}
              count={30}
            />
          </div>
        </SplitPane>
      </div>
    </div>
  )
}

const ArenaSelection = ({
  doc,
  arena,
  setArena,
}) => {
  if (doc == null) {
    return null
  }
  const section = doc['arenas']
  if (section == null) {
    return null
  }

  return (
    <div className="arena-selection">
      <select value={arena} onChange={e => setArena(e.target.value)}>
        {
          Object.keys(section).map(name => (
            <option key={name} value={name}>{ name }</option>
          ))
        }
      </select>
    </div>
  )
}

export default WaveAnalyzer
