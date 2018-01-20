import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

class Header extends Component{
	renderLogin() {
		switch(this.props.auth){
			case null:
				return; 
			case false:
				return <a href="/auth/google">Login with Google</a>;
			default:
				return <div key="2"><a href="/api/logout">Logout</a></div>;

		}
	}
	render(){
		console.log(this.props); 
		return (
			<div>
				<h3><Link 
					to={this.props.auth ? '/dashboard' : '/'}
					className="col-md-8">Header</Link></h3>
					<h3 className="col-md-4">{this.renderLogin()}</h3>
			</div>
		); 
	}
		
}

function mapStateToProps({ auth }){
	return { auth }; 
}

export default connect(mapStateToProps)(Header); 