import React from 'react';
import API from './api';

export default class PersonPost extends React.Component {
    state={
        name:''
    }
    handleChange = event =>{
        this.setState({name:event.target.value})
    }
    //Prevent page reload
    handleSubmit = event =>{
        event.preventDefault();

        const user = {
            name:this.state.name

    };

    API.post(`https://jsonplaceholder.typicode.com/users`,{user})
        .then(res =>{
            console.log(res);
            console.log('----------------');
            console.log(res.data);
            console.log(res.status);
        })
    
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person's Name:
                        <input type='text' name='name' onChange={this.handleChange} />
                    </label>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }

}