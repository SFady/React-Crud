import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class AddItem extends Component {
  
    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        if (this.props.onAddItem) {
            this.props.onAddItem(values)
        }
    }

    render() {
        return (
            <div>
                <Link
                    className='close-add-item'
                    to='/'>
                    Close
                </Link>
                <form onSubmit={this.handleSubmit} className='add-item-form'>
                    <div className='add-item-details'>
                        <input type='text' name='id' placeholder='id' />
                        <input type='text' name='firstName' placeholder='firstName' />
                        <input type='text' name='lastName' placeholder='lastName' />
                        <button>Add Item</button>
                    </div>
                </form>
        </div>
        )
    }
}

export default AddItem