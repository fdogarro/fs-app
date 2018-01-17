import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

class Header extends Component{
	renderLogin() {
		switch(this.props.auth){
			case null:
				return; 
			case false:
				return <li className="col-md-4"><a href="/auth/google">Login with Google</a></li>; 
			default:
				return <li className="col-md-4"><a href="/api/logout">Logout</a></li>;  
		}
	}
	render(){
		console.log(this.props); 
		return (
			<ul className="row">
				<Link 
				to={this.props.auth ? '/dashboard' : '/'}
				className="col-md-8">Header</Link>
				<li className="col-md-4"><a>{this.renderLogin()}</a></li>
			</ul>
		); 
	}
		
}

function mapStateToProps({ auth }){
	return { auth }; 
}

export default connect(mapStateToProps)(Header); 