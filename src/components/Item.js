import React, { Component } from 'react'
import './Item.css';

export class Item extends Component {
  render() {
    return (
      <div className='item'>
            <img src={"./img/" + this.props.item.img}></img>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <p>{this.props.item.price} $</p>
            <div className='add__to-cart' onClick={() => this.props.onAdd(this.props.item)}>Добавить в корзину</div>
      </div>
    )
  }
}

export default Item
