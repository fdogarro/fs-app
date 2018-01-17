import React, { Component } from 'react'; 

class Header extends Component{
	render(){
		return (
			<div className="row">
				<h3 className="col-md-8">Header</h3>
				<h3 className="col-md-4"><a>Login</a></h3>
			</div>
		); 
	}
		
		
}

export default Header; 