import React, { Component } from 'react';
import Header from '../components/Header';
import CheeseList from '../components/CheeseList';
import StockList from '../components/StockList';


class CheesesBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cheeses: [
        {
          id: 1,
          name: "Stilton",
          image: "https://media.istockphoto.com/photos/stilton-blue-cheese-picture-id545547872?k=6&m=545547872&s=612x612&w=0&h=nKG_jXx3d_NTG5CU1jvoRH5gfU7kr2Xg4VkeAdcUHjo=",
          price: 3.99,
          discount: ""
        },
        {
          id: 2,
          name: "Gorgonzola",
          image: "https://media.gettyimages.com/photos/pieces-of-gorgonzola-cheese-on-chopping-board-picture-id499163113?s=612x612",
          price: 6.99,
          discount: 4.99
        },
        {
          id: 3,
          name: "Brie",
          image: "https://cdn.shopify.com/s/files/1/2836/2982/products/brie-recipe_grande.jpg?v=1533088694",
          price: 2.59,
          discount: ""
        },
        {
          id: 4,
          name: "Wensleydale with Cranberries",
          image: "https://www.fordfarm.com/wp-content/uploads/2016/09/wensleydale-with-cranberries-2.jpg",
          price: 2.99,
          discount: ""
        },
        {
          id: 5,
          name: "Smoked Applewood Cheddar",
          image: "https://wittmanscheese.com/wp-content/uploads/2015/10/Applewood-Cheddar-600x600.jpg",
          price: 1.99,
          discount: ""
        }
      ]
    }
  }

  render() {
    return (
      <div className='cheeses-box'>
        <Header title='Cheese List' />
        <StockList stock={this.state.cheeses} />
        <CheeseList cheeses={this.state.cheeses} />
      </div>
    );
  }
}

export default CheesesBox;
