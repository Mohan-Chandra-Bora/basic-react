import {User} from './User';
import {UserClass} from './UserClass';
import React from 'react';
import UserContext from '../utils/UserContext';

export class AboutUs extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){}

    componentWillUnmount(){}
    render(){
        return (
            <div>
                <h1>About</h1>
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className='text-xl font-bold'>{loggedInUser}</h1> }
                    </UserContext.Consumer>
                </div>
                <h2>This is the about us page in construction. Please check in later for updates...</h2>
                <UserClass name={"FirstChild"} location = {"Pune Class"}/>
            </div>
        )
    }
}