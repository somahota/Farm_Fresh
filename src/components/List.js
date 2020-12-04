import React, {Component} from 'react';
import Product from "./Product.js";

/*
The List class maps a list of key value pairs, representing each product info, to the Product render, which displays it in the
format designated by the Product class.
*/

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <Product key={item.name} name={item.name} type={item.type} nutrients ={item.nutrients} image={item.image} price={item.price}/>
    });

    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
