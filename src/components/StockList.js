import React, { Component } from 'react';

class StockList extends Component {
  render(){
    const stockList = this.props.stock.map((stock) => {

    });
    const averagePrice = this.props.stock.map((stock) => {
      var total = 0;
      for (var i = 0; i < i.length; i++) {
        stock.price.add(total);
      }
      return total;
    });
    return (
      <div className='stock-list'>
        <p> Stock Details </p>
        <p>Number of cheeses in stock: {stockList.length}</p>
        <p>Average cost of cheese: £{averagePrice.total}</p>
      </div>
    )
  }
}

export default StockList;
