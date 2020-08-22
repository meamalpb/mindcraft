import React, { Component } from 'react';
import Card from './Card';
import fire from '../config/fire';
import Navbar from '../components/NavbarAdmin';
import '../styles/admin.css';

class Admin extends Component {
    
    constructor(){
        super();
        this.state = {
            logged :0
        };
    }

    componentDidMount(){
        //check if user logged in
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState(
                    {logged:1}
                );
            }
            else{
                window.location.href = '/';
            }
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.logged
                        ?<div>
                            <Navbar/>
                            <div>
                                <Card/>
                            </div>    
                        </div>
                        :<div></div>
                }
            </div>
        );
    }
}

export default Admin;