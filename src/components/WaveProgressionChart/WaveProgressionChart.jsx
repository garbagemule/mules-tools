import React, { Fragment, useState } from 'react'

import './WaveProgressionChart.css'

const WaveProgressionChart = (props) => {
  const [count, setCount] = useState(props.count || 20)

  const single = props.single
    .slice()
    .sort((a, b) => b.wave - a.wave)

  const recurrent = props.recurrent
    .slice()
    .sort((a, b) => b.priority - a.priority)

  const waves = []
  for (let i = 0; i < count; i++) {
    const n = i + 1
    const entry = {
      winner: null,
      candidates: [],
    }
    for (let w of single) {
      if (w.wave === n) {
        entry.winner = w
        entry.candidates.push(w)
        break
      }
    }
    for (let w of recurrent) {
      const first = (w.wave || w.frequency)
      if ((n >= first) && (((first - n) % w.frequency) === 0)) {
        if (entry.winner == null) {
          entry.winner = w
        }
        entry.candidates.push(w)
      }
    }
    waves.push(entry)
  }

  return (
    <Fragment>
      <div className="wave-progression-chart-header">
        <div className="legend">
          <table className="wave-progression-chart">
            <tbody>
              <tr>
                <td className="cell tiny winner" />
                <th className="left-align">winner</th>
              </tr>
              <tr>
                <td className="cell tiny candidate" />
                <th className="left-align">candidate</th>
              </tr>
              <tr>
                <td className="cell tiny miss" />
                <th className="left-align">miss</th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="settings">
          <label htmlFor="wave-count">Wave count: </label>
          <input
            id="wave-count"
            type="number"
            value={count}
            onChange={e => setCount(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="wave-progression-chart-container">
        <table className="wave-progression-chart">
          <tbody>
          {
            single.map(w => (
              <WaveRow
                key={`single-${w.id}`}
                wave={w}
                waves={waves}
                count={count}
              />
            ))
          }
          <tr><td colSpan={count + 1}><hr /></td></tr>
          {
            recurrent.map(w => (
              <WaveRow
                key={`recurrent-${w.id}`}
                wave={w}
                waves={waves}
                count={count}
              />
            ))
          }
          <tr><td colSpan={count + 1}><hr /></td></tr>
          {
            <WaveNumberRow count={count} />
          }
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

const WaveRow = (props) => {
  const { wave, waves, count } = props

  return (
    <tr>
      <th>{wave.id}</th>
      {
        [...Array(count).keys()].map(i => (
          <td
            key={`${wave.id}-${i}`}
            className={getCellClass(i, wave, waves)}
          />
        ))
      }
    </tr>
  )
}

const getCellClass = (i, w, waves) => {
  if (waves[i].winner === w) {
    return 'cell winner'
  }
  if (waves[i].candidates.includes(w)) {
    return 'cell candidate'
  }
  return 'cell miss'
}

const WaveNumberRow = (props) => {
  const { count } = props

  return (
    <tr>
      <th/>
      {
        [...Array(count).keys()].map(i => (
          <td key={`wave-number-${i}`}>
            {
              `${((i + 1) < 10) ? '0' : ''}${i + 1}`
            }
          </td>
        ))
      }
    </tr>
  )
}

export default WaveProgressionChart
