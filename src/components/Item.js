import React, { Component } from 'react';


/*

*/
class RecipeItem extends Component {
  constructor(props) {
    super(props);

    //default is empty -> info will be passed in from FilteredList
    this.state = {
      name: 'name',
      type: '',
      nutrients: '',
      price: 0,
      image: ''
    };
  }

  render(){
    return (
        <div className="prodDiv">

        {/*
        
        */}
          <figure className="figure">
            <img className = "recipePic" src={this.props.image} width="200" />
          </figure>

          {/*
          
          */}
          <div className="prodInfo" >
            <h3 id="prodName" >{this.props.name}</h3>
              <h5>Type: <b>{this.props.type}</b></h5>
              <h5>Nutrients: <b>{this.props.nutrients}</b></h5>
            <h5>Price: <b>{this.props.price} min</b></h5>
          </div>
        </div>
    );
  }
}

export default RecipeItem;
