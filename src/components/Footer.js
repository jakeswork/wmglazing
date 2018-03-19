import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="split">
					<div className="column half">
						<h4>West Midland Glazing</h4>
						<h4>301 - 305 Northfield Road</h4>
						<h4>Harborne</h4>
						<h4>Birmingham</h4>
						<h4>B17 OTG</h4>
						<div className="contact-info">
							<h4><a href="tel:0121 426 1275">0121 426 1275</a></h4>
							<h4><a href="mailto:enquiries@wmglazing.co.uk">enquiries@wmglazing.co.uk</a></h4>
						</div>
					</div>
					<div className="column half">
						<ul>
							{
								this.props.items.map((navItem, i) => {
									return (
										<li className="nav-item" key={i}>
											<NavLink exact to={navItem.path} activeClassName="active">{navItem.name}</NavLink>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
				<div className="bottom">
					<ul>
						<li>
							&copy; West Midlands Glazing Ltd 2018
						</li>
						<li>
							Terms
						</li>
						<li>
							Privacy
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Footer
