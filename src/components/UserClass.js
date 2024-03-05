import React from 'react';

export class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            count: 0
        }

        console.log(this.props?.name + `constructor load`)
    }

    componentDidMount(){
        console.log(this.props?.name + `Component Did Mount`)
    }
    render(){
        console.log(this.props?.name + `render load`)
        const {name, location} = this.props;
        const {count}=  this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={()=> {
                    this.setState({
                        count: count + 1
                    });
                }
                }>Count Increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: bora.mohan@gmail.com</h4>
            </div>
        )
    }
}