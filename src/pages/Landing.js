import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CustomerReviews from '../components/CustomerReviews'

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
          <h2>What We Do Best</h2>
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
							<Link to="/windows/">
								<div className="grid-item sixty windows">
									<h4><span>Wi</span>ndows</h4>
									<div className="hover-info">
										<p>Short Description</p>
									</div>
								</div>
							</Link>
							<Link to="/doors/">
								<div className="grid-item fourty doors">
									<h4><span>Do</span>ors</h4>
									<div className="hover-info">
										<p>Short Description</p>
									</div>
								</div>
							</Link>
						</div>
          </div>
      	</section>
				<section className="wrapper our-work">
					<h2>We <span>Love</span> Our Customers</h2>
					<p>...and they love us too!</p>
					<CustomerReviews />
				</section>
				<section className="contact">
					<h2>Get In Touch</h2>
					<p>Let's come together and make your home beautiful. Click the button below to get in touch about any of our products.</p>
					<Link to="/contact/" className="button">Contact Us</Link>
				</section>
      </div>
    )
  }
}

export default Landing
