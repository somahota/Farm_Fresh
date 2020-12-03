import React, {Component} from 'react';
import Product from "./Product.js";


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