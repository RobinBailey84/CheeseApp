import React, { Component } from 'react';

class CheeseItem extends Component {
render() {
return (
  <li className='cheese-item'>
    <p> Name: {this.props.cheese.name} </p>
    <p> Price: £{this.props.cheese.price}</p>
    <p className='discount'> Discount Price: £{this.props.cheese.discount}</p>
    <img src={this.props.cheese.image} />
  </li>
);
}
}

export default CheeseItem;
