import React, { Component } from 'react';
import '../styles/login.css';
import fire from '../config/fire';
import $ from 'jquery';
import {isEmpty} from '../components/validation'
import validator from 'email-validator'

const db = fire.firestore()
class Signup extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 email:'',
       password:'',
       name:'',
       emailerror:'',
       passworderror:''
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
                }
               );
            }
          );
          }

//email,name and password inputs
	handleEmailChange=(e)=>{
		this.setState(
			{email:e.target.value}
		)
  }
 
  

	handlePasswordChange=(e)=>{
		this.setState(
			{password:e.target.value}
		)
  }


  handleNameChange=(e)=>{
    this.setState(
      {name:e.target.value}
    )
  }
  //handling Submit

	handleLogin=(e)=>{
    e.preventDefault();
    if(isEmpty(this.state.email)){
      alert("Email should not be empty")
    }
    
    else{
      if(!(validator.validate(this.state.email))){
        alert("enter valid email")
      }
      else{
        if(isEmpty(this.state.name)){
          alert("Name should not be empty")}
          else{
      
    
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then((u) =>{  
      db.collection("users").add({
        name: this.state.name,
        email: this.state.email
      });
      $('#Login-Page').css('display','none');
      $('#Signup-Page').css('display','none');
      $('#Dark').css('display','none');
      $('#Home-Button').addClass("clicked");
      $('#Signup-Button').removeClass("clicked");
      $('#Login-Button').removeClass("clicked");
    })
    
    .catch((err)=>{
        alert(err.message)
      
                }
              )
            }
          }
        }
	}
	render() {
		return (
			<div>
				<form>
          <label>
            <p className="label-txt">ENTER YOUR EMAIL</p>
            <input type="text" className="input" value={this.state.email} onChange={this.handleEmailChange}/>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <label>
            <p className="label-txt">ENTER YOUR NAME</p>
            <input type="text"className="input" value={this.state.name} onChange={this.handleNameChange}/>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <label>
            <p className="label-txt">ENTER YOUR PASSWORD</p>
            <input type="password" className="input" value={this.state.password} onChange={this.handlePasswordChange}/>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <button type="submit" onClick={this.handleLogin}>submit</button>
        </form>
			
			</div>
		)
	}
}

export default Signup;

