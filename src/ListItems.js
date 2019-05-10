import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItems extends Component {

    render() {

        const { items, onDeleteItem } = this.props

        return (
          <ul className='item-list'>
            {items.map((item) => (
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
                        className='contact-remove'>
                        Delete
                    </button>
                </li>
            ))}
          </ul>
        )

    }

}

ListItems.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
}

export default ListItems