import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Fragment>
      <h1>Welcome to Mule's Tools!</h1>
      <p>
        This page contains a small collection of little tools and utilities
        I think are useful enough to share with the world.
      </p>
      <p>
        For now, it's just the <Link to="/wave-analyzer">wave analyzer</Link>.
      </p>
      <p>
        Happy hacking!
      </p>
    </Fragment>
  )
}

export default Home
