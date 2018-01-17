import React, { Component } from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; 
import * as actions from '../actions'; 

import Header from './Header';
import Main from './Main';
import Dashboard from './Dashboard';
import AlertsNew from './AlertsNew';  

class App extends Component{
	render(){
		return(
			<div>
				<BrowserRouter>
					<div className="container">
						<Header />
						<Route exact path="/" component={Main} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route path="/alerts/new" component={AlertsNew} />
					</div>
				</BrowserRouter>
			</div>
		); 
	}
}

export default connect(null, )(App); 