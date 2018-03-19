import React, { Component } from 'react'
import Portfolio from '../components/Portfolio'

class Work extends Component {
  render() {
    return (
      <section className="wrapper work">
				<h2>Our Work</h2>
				<p>Below is a collection of our projects. Click on a tile to find out more!</p>
				<Portfolio />
			</section>
    )
  }
}

export default Work
