import React, { Component } from 'react';

class StockItem extends Component {
render() {
return (
  <li className='stock-item'>
    <p>{this.props.stock.price}</p>
    <p>{this.props.stock.discount}</p>
  </li>
);
}
}

export default StockItem;
