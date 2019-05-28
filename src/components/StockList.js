import React, { Component } from 'react';
import StockItem from './StockItem';

class StockList extends Component {
  render(){
    const stockList = this.props.stock.map((stock) => {
      console.log(stock);
      return(
        stock.price
      )


    });

    return (
      <div className='stock-list'>
        <p> Stock Details </p>
        <p>Number of cheeses in stock: {stockList.length}</p>
        <p>Average cost of cheese: £{stockList}</p>
      </div>
    )
  }
}

export default StockList;
