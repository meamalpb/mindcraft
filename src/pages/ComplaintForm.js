import React, { Component } from 'react';
import '../styles/login.css';
//import fire from '../config/fire';
import $ from 'jquery';


class Login extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			email:'',
	   }
	}

	
	componentDidMount(){
		//animation
		$(document).ready(function(){

			$('.input').focus(function(){
			  $(this).parent().find(".label-txt").addClass('label-active');
			});
		  
			$(".input").focusout(function(){
			  if ($(this).val() === '') {
				$(this).parent().find(".label-txt").removeClass('label-active');
			  };
			});
		  
		  });
	}
	//getting the data
	handleEmailChange=(e)=>{
		this.setState(
			{email:e.target.value}
		)
	}


	render() {
		return (
			<div>
				<form>
					<label>
						<p className="label-txt">Email</p>
						<input type="text" className="input" value={this.state.email} onChange={this.handleEmailChange}/>
						<div className="line-box">
							<div className="line"></div>
						</div>
					</label>
					<button type="submit" onClick="">submit</button>
				</form>
				<h1>{this.state.users}</h1>
			</div>
		)
	}
}

export default Login;
