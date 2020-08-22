import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import '../App.css';
import $ from 'jquery';


class Navbar extends Component {
    //animations
    showSignup=()=>{
        if($('#Signup-Page').css("display") === 'block') {
            $('#Signup-Page').fadeOut();
            $('#Dark').fadeOut();
            $('#Home-Button').addClass("clicked");
            $('#Signup-Button').removeClass("clicked");
        }
        else {
            $('#Login-Page').fadeOut();
            $('#Signup-Page').fadeIn();
            $('#Dark').fadeIn();
            $('#Home-Button').removeClass("clicked");
            $('#Signup-Button').addClass("clicked");
            $('#Login-Button').removeClass("clicked");
        }
    }

    
    showLogin=()=>{
        if($('#Login-Page').css("display") === 'block') {
            $('#Login-Page').fadeOut();
            $('#Dark').fadeOut();
            $('#Login-Button').removeClass("clicked");
            $('#Home-Button').addClass("clicked");
        }
        else {
            $('#Signup-Page').fadeOut();
            $('#Login-Page').fadeIn();
            $('#Dark').fadeIn();
            $('#Signup-Button').removeClass("clicked");
            $('#Home-Button').removeClass("clicked");
            $('#Login-Button').addClass("clicked");
        }
    }

    showHome=()=>{
        $('#Login-Page').fadeOut();
        $('#Signup-Page').fadeOut();
        $('#Dark').fadeOut();
        $('#Login-Button').removeClass("clicked");
        $('#Signup-Button').removeClass("clicked");
        $('#Home-Button').addClass("clicked");
    }

    //navbar when user not logged in
    render() {
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <div className="right">
                            <Button variant="contained" color="primary" disableElevation component={Link} to='/' className="coloor clicked" id='Home-Button' onClick = {this.showHome}>Home</Button>
                            <Button variant="contained" color="primary" disableElevation component={Link} to='/' className="coloor" id='Login-Button' onClick = {this.showLogin}>Login</Button>
                            <Button variant="contained" color="primary" disableElevation component={Link} to='/' className="coloor" id='Signup-Button' onClick = {this.showSignup}>Sign Up</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;