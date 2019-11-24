import React, { Component } from 'react';

export class AddTodo extends Component {
    state= { 
        title : ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ''});

    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value})
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display : 'flex'}}>
                    <link 
                        rel="stylesheet" 
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
                        crossOrigin="anonymous">    
                    </link>
                    <input  className='form-control' style={{backgroundColor : 'lightgrey'}} type="text" value={this.state.title} onChange={this.onChange} name='title'  placeholder="write your todo..." />
                    <input type="submit" value='Add Note' style={{backgroundColor : '#17a2b8', fontSize : '17px', border :'2px #17a2b8'}}  />
            </form>
         
           
        )
    }
}

export default AddTodo
