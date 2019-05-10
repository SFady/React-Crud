import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItems extends Component {

    state = {
        query: ''
    }
    
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    render() {

        const { query } = this.state
        const { items, onDeleteItem } = this.props
        
        const showingItems = query === ''
            ? items
            : items.filter((item) => (
                item.firstName.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            <div className='item-list'>
                <input
                    className='search-items'
                    type='text'
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                />
                <ul>
                    {showingItems.map((item) => (
                        <li key={item.id} className='list-item'>
                            <span className='item-firstName'>
                                {item.firstName}
                            </span>
                            &nbsp;
                            <span className='item-lastName'>
                                {item.lastName}
                            </span>
                            &nbsp;
                            <button
                                onClick={() => onDeleteItem(item)}
                                className='item-delete'>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>    
        )

    }

}

ListItems.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
}

export default ListItems