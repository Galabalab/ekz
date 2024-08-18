import './Items.css';
import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <div className='Items'>
            <h1>Лучшие товары для дома!</h1>
            <div className='items__inner'>
            {this.props.items.map(el => (
                <Item key={el.id} item={el} onAdd={this.props.onAdd}></Item>
            ))}
            </div>      
      </div>
    )
  }
}

export default Items
