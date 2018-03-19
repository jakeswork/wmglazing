import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import Landing from './pages/Landing'
import Work from './pages/Work'
import Doors from './pages/Doors'
import Windows from './pages/Windows'
import Contact from './pages/Contact'
import Footer from './components/Footer'

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
					<Footer items={navItems} />
        </div>
      </Router>
    )
  }
}

export default App
