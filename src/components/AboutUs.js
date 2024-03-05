import {User} from './User';
import {UserClass} from './UserClass';
import React from 'react';

export class AboutUs extends React.Component {
    constructor(){
        super();

        console.log("Parent constructor load");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is the about us page in construction. Please check in later for updates...</h2>
                <UserClass name={"FirstChild"} location = {"Pune Class"}/>
                <UserClass name={"SecondChild"} location = {"Pune Class"}/>
            </div>
        )
    }
}