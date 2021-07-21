import React from 'react'

import './WaveDistributionChart.css'

const KNOWN_TYPES = [
  'default',
  'special',
  'swarm',
  'supply',
  'upgrade',
  'boss',
]

const WaveDistributionChart = (props) => {
  const all = props.recurrent.concat(props.single)

  const distribution = all.reduce((map, w) => {
    if (map[w.type] == null) {
      map[w.type] = []
    }
    map[w.type].push(w)
    return map
  }, {})

  const counts = Object.keys(distribution)
    .map(type => distribution[type].length)

  const max = Math.max(...counts)

  const missing = Object.keys(distribution)
    .filter(type => !KNOWN_TYPES.includes(type))

  const types = KNOWN_TYPES.concat(missing)

  return (
    <table className="wave-distribution-chart">
      <tbody>
        {
          types.map(type => (
            <TypeRow
              key={`entry-${type}`}
              type={type}
              max={max}
              distribution={distribution}
            />
          ))
        }
      </tbody>
    </table>
  )
}

const TypeRow = (props) => {
  const { type, max, distribution } = props

  const count = (distribution[type] || []).length
  const percent = count / max

  return (
    <tr>
      <th>{type}</th>
      <td>
        <div className="bar" style={{ flex: `${Math.floor(percent * 100)}% 0 0` }} />
        <div className="count">{count}</div>
      </td>
    </tr>
  )
}

export default WaveDistributionChart
