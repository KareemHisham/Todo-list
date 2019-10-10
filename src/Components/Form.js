import React, { Component } from 'react'

export default class Form extends Component {
    state={
        name: '',
        age: ''
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        if(e.target.name.value === '' && e.target.age.value === '') {
            return false
        } else {
            this.props.addItem(this.state)
        this.setState({
            name: '',
            age: ''
        })
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input  type='text'
                        placeholder='Enter Your Name'
                        id='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                />
                <input  type='number'
                        placeholder='Enter Your Age'
                        id='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}
