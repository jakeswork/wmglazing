import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import Landing from './pages/Landing'
import Work from './pages/Work'
import Doors from './pages/Doors'
import Windows from './pages/Windows'
import Contact from './pages/Contact'

class App extends Component {
  render() {
		let navItems = [
			{
				name: 'Home',
				path: '/'
			},
			{
				name: 'Our Work',
				path: '/work/'
			},
			{
				name: 'Doors',
				path: '/doors/'
			},
			{
				name: 'Windows',
				path: '/windows/'
			},
			{
				name: 'Contact',
				path: '/contact/'
			}
		]

    return (
      <Router>
        <div>
					<Menu right noOverlay burgerButtonClassName={"fa fa-bars menu-button"}>
						{
							navItems.map((navItem, i) => {
								return (
									<NavLink key={i} exact to={navItem.path} activeClassName="active">{navItem.name}</NavLink>
								)
							})
						}
          </Menu>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/work/" component={Work} />
            <Route exact path="/doors/" component={Doors} />
            <Route exact path="/windows/" component={Windows} />
            <Route exact path="/contact/" component={Contact} />
          </Switch>
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
										navItems.map((navItem, i) => {
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
        </div>
      </Router>
    )
  }
}

export default App
