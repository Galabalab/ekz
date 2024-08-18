import React, { Component } from 'react'
import './Order.css';
export class Order extends Component {
  render() {
    return (
      <div>
        <div className='item__order'>
             <div className='first__item'>
             <img src={"./img/" + this.props.item.img}></img>
             <h2>{this.props.item.title}</h2>
             </div>
             <div className='second__item'>
             <p>{this.props.item.price} $</p>
             <div className='delete__order' onClick={() => this.props.oneDelete(this.props.item.id)}>Удалить </div>
             </div>
            
      </div>
      </div>
    )
  }
}

export default Order
