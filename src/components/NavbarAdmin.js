import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import '../App.css';
import fire from '../config/fire';
import $ from 'jquery';
import Complaintform from '../pages/ComplaintForm'

//navbar when authoritiea have logged in
class Navbar extends Component {   
    constructor(props) {
        super(props)
    
        this.state = {
             Complainform:<h1>h</h1>
        }
    }
             
    
    handleSignout=()=>{
        fire.auth().signOut().then(() =>{
      		$('#Dark').css('display','none');
      		$('#Home-Button').addClass("clicked");
        }).catch((err)=>{
            console.log(err);
        })
    }
    addComplaint=()=>{
        
        this.setState({
            Complainform:<Complaintform/>
        })
    }

    render() {
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <div className="right">
                            <Button variant="contained" color="primary" disableElevation component={Link} to='/' className="coloor clicked" id='Home-Button-Admin'>Home</Button>
                            <Button variant="contained" color="primary" disableElevation  className="coloor" to='/' component={Link} id='Signout-Button' onClick={this.handleSignout}>Sign Out</Button>
                            {/* <Button variant="contained" color="primary" disableElevation component={Link} to='/' className="coloor clicked" id='Home-Button-Admin' onClick={this.addComplaint}>Add Complaint</Button> */}
                        </div>
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}

export default Navbar;