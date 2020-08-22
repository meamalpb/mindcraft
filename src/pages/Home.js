import React, { Component } from 'react';
import fire from '../config/fire';
import Login from './Login';
import Signup from './Signup';
import '../styles/home.css';
import Dark from '../black.jpg';
import $ from 'jquery';
import Navbar from '../components/NavbarHome';

class Home extends Component {

    constructor(){
        super();
        this.state = {
            logged :1
        };
    }
   //animations
    hideForm = () =>{
        $('#Login-Page').fadeOut();
        $('#Signup-Page').fadeOut();
        $('#Complaint-Form').fadeOut();
        $('#Dark').fadeOut();
        $('#Home-Button').addClass("clicked");
        $('#Signup-Button').removeClass("clicked");
        $('#Login-Button').removeClass("clicked");
        $('#Complaint-Button').removeClass("clicked");
    }

        //Checking if user is logged
    componentDidMount(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                window.location.href = '/admin';
            }
            else{
                this.setState(
                    {logged:0}
                );
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.logged === 0
                    ?<div>
                        <Navbar/>
                        <div id='Heading'>      
                            <div>
                                HOME
                            </div>            
                        </div>
                        <div id='Dark' onClick = {this.hideForm}>
                            <img src={Dark} alt=""></img>
                        </div>
                        <div id='Login-Page'>
                            <Login />
                        </div>
                        <div id='Signup-Page'>
                            <Signup />    
                        </div>
                    </div>
                    :<div></div>     
                }    
            </div>
        )
    }
}

export default Home;
