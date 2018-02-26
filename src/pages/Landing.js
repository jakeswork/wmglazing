import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <section className="full-screen landing">
					<div className="text-wrapper">
						<h3>window wizards | door experts</h3>
          	<h1>Brightening lives since 1977.</h1>
          	<Link to="/work/" className="button">Our Work</Link>
					</div>
          <i className="fa fa-chevron-down bounce"/>
        </section>
        <section className="wrapper intro">
          <h2>Some Heading About You</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <div className="grid">
						<div className="column fourty">
							<div className="grid-item thirty conservatory">
								<h4><span>Co</span>nservatories</h4>
								<div className="hover-info">
									<p>Short Description</p>
								</div>
							</div>
							<div className="grid-item thirty brands">
								<h4><span>Br</span>ands</h4>
								<div className="hover-info">
									<p>Short Description</p>
								</div>
							</div>
							<div className="grid-item thirty commercial">
								<h4><span>Co</span>mmerical Work</h4>
								<div className="hover-info">
									<p>Short Description</p>
								</div>
							</div>
						</div>
						<div className="column sixty">
							<div className="grid-item sixty windows">
								<h4><span>Wi</span>ndows</h4>
								<div className="hover-info">
									<p>Short Description</p>
								</div>
							</div>
							<div className="grid-item fourty doors">
								<h4><span>Do</span>ors</h4>
								<div className="hover-info">
									<p>Short Description</p>
								</div>
							</div>
						</div>
          </div>
      	</section>
				<section className="contact">
					<h2>Contact</h2>
					<p>Let's add a little more light to your life. Click the button below to get in touch about any of our products.</p>
					<Link to="/contact/" className="button">Contact</Link>
				</section>
      </div>
    )
  }
}

export default Landing
