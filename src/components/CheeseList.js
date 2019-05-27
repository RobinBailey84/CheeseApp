
import React, { Component } from 'react';
import CheeseItem from './CheeseItem';


class CheeseList extends Component {

  render() {
    const cheeseItems = this.props.cheeses.map((cheese) => {
      return (
        <CheeseItem cheese={cheese} key={cheese.id}/>
      );
    });
    return (
      <div className='cheese-list'>
        <ul>
          {cheeseItems}
        </ul>
      </div>
    );
  }

}

export default CheeseList;
