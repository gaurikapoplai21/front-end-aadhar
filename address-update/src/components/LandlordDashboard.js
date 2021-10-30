import React, { Component } from 'react'
import Profile from './Profile'
import {GenericNavbar} from './Navbar'
import Listofrequests from './Listofrequests'

export class LandlordDashboard extends Component 
{   
    render() 
    {   
        const listofrequests = {
            width:"60%",
            marginLeft: "10%",
            marginTop: "2%",
            display:"inline-block",
            verticalAlign: "top",
           
            height: "100%"
        }
        const profile = {
           marginLeft : "3%",
           marginTop: "2%",
           display:"inline-block",
           verticalAlign: "top",
           
            height: "100%"
           

        };
        const heading = {
           
            fontWeight: "500",
            fontSize:"25px",
            
        }
        
        return (
            <div>
                <GenericNavbar logintype="Landlord" />
               
                <div style={profile}> 
                <Profile />
                </div>
                <div style={listofrequests}>
                <p style={heading}>Pending Requests for Address Update</p>
                <Listofrequests />
                </div>
               
            </div>
        )
    }
}
export default LandlordDashboard;
