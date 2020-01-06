import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration : this.props.todo.completed ? 'line-through' : 'none',
            borderLeft: '6px #2196F3 solid',
            borderBottom: '3px #2196F3 solid',
            background : '#ddffff',
            padding : '10px'
           
    }
    }
    getcStyle = () => {
        return {
            cursor: 'pointer',
            flex : '1'
           
        }
    }
   
    
    render() {
        const {title, id} = this.props.todo;
        return  (
        <div style={this.getStyle()}>
            
            <input type='checkbox' style={this.getcStyle()} onChange={this.props.markComplete.bind(this,id)}/> {' '}
            {title}
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} type="button" >delete</button>
            
        </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired
}


const btnStyle = {
    cursor: 'pointer',
    float: 'right',
    borderRaduis : '50%',
    backgroundColor : 'red',
    width : '100px'
   

}

export default TodoItem
