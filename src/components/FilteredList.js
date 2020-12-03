import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import List from './List';
import Product from './Product';
import './FilteredList.css';
import LoadingProducts from "../loaders/Products";
import NoResults from "../empty-states/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

class FilteredList extends Component {
  constructor(props) {
    super(props);
   //default values
    this.state = {
      search: '',
      type: 'All',
      nutrients: 'None',
      sort: 'None',
	  //term: this.props.searchTerm
    };
  }
  

  onTypeFilter = (event) => {
	  this.state.type = event.state.type;
  }

  onFiberFilter = (event) => {
      this.state.nutrients = event.state.nutrients;
  }


 
  filterProd = (item) => {
	  var isGood = true;
	  
    if(this.state.type === "All") { 
		// do nothing
	} else if (this.state.type === item.type){
		// do nothing
	} else {
		isGood = false;	
	}
	
	if(this.state.nutrients === "None") { 
		// do nothing
	} else if (this.state.nutrients === item.nutrients){
		// do nothing
	} else {
		isGood = false;	
	}
	return isGood;
  }


  sortByPrice = (prod1, prod2) => {
    const difference = prod1.price - prod2.price;

    if (this.state.sort ==  "None") {
        return 0;
    }

    if (this.state.sort == "Low to High") {
       return difference;
    }
    if (this.state.sort == "High to Low")
	{
    return -1 * difference;
  }
  }


  onSelectFilterType = (eventKey) => {
      this.setState({
        type: eventKey.target.value
      });
  }

  onSelectFilterNutrients = (eventKey) => {
      this.setState({
        nutrients: eventKey.target.value
      });
  }


  sortOnSelected = (eventKey) => {
    
      this.setState({
        sort: eventKey.target.value
      });
  }


  resetOnClick = (e) => {
    this.setState({
      nutrients: 'None',
      type: 'All',
      sort: 'None',
    })
  }

  render(){
	  
		
		let productsData;
    let term = this.props.searchTerm;
    let x;
	
	function searchingFor(term) {
      return function(x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
      };
    }
	  productsData = this.props.items
      .filter(searchingFor(term))
		  .filter(this.filterProd).sort((prod1, prod2) => this.sortByPrice(prod1, prod2))
      .map(product => {
        return (
          <Product
            key={product.id}
            price={product.price}
            name={product.name}
            image={product.image}
            id={product.id}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
            openModal={this.props.openModal}
          />
        );
      });

	// Empty and Loading States
    let view;
    if (productsData.length < 0 && !term) {
      view = <LoadingProducts />;
    } else if (productsData.length <= 0 && term) {
      view = <NoResults />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="products"
        >
          {productsData}
        </CSSTransitionGroup>
      );
    }
	return (<div>
	
   
			   <div id="toolbar">
              <Button className="dropDown" id="reset" onClick={this.resetOnClick}> Reset </Button>

             <h3 className="dropLabel"> Type: </h3>
            <select onChange = {this.onSelectFilterType}  className="dropDown" id="typeDropdown" >
			    <option value="All">All</option>
               <option value="Fruits">Fruits</option>
               <option value ="Vegetables" >Vegetable</option>
				  <option value ="Nuts" >Nuts</option>
			  </select>
			  
			  <h3 className="dropLabel"> Nutrients: </h3>
            <select onChange = {this.onSelectFilterNutrients}  className="dropDown" id="nutrientsDropdown" >
			   <option value="None">None</option>
               <option value="Fiber">Fiber</option>
               <option value ="Good Fats" >Good Fats</option>
				  <option value ="Vitamins" >Vitamins</option>
				  <option value ="Carbs" >Carbs</option>
			  </select>
			  
			    <h3 className="dropLabel"> Sort by Price: </h3>
            <select onChange = {this.sortOnSelected}  className="dropDown" id="sortDrop" >
			    <option value="None">None</option>
               <option value="Low to High">Low to High</option>
               <option value ="High to Low" >High to Low</option>
			  </select>
	    </div>  
  //      <div className = "filter-list">
  
		<div className="products-wrapper">{view}</div>

	  </div>
	  </div>
			 
			/*  <h3 className="dropLabel" onSelect={this.onSelectFilterNutrients}> Nutrients: </h3>
			   <DropdownButton className="dropDown" id="nutrientsDropdown" title={this.state.nutrients} >
                <Dropdown.Item eventKey="Fiber" >Fiber</Dropdown.Item>
                <Dropdown.Item eventKey="Good Fats" >Good Fats</Dropdown.Item>
				<Dropdown.Item eventKey="Vitamins" >Vitamins</Dropdown.Item>
				<Dropdown.Item eventKey="Carbs" >Carbs</Dropdown.Item>
            </DropdownButton>
			
			<h3 className="dropLabel"> Sort By Price: </h3>
			<DropdownButton id="sortDrop" className="dropDown" title={this.state.sort}>
              <Dropdown.Item eventKey="Price (Low to High)" >Price (Low to High)</Dropdown.Item>
              <Dropdown.Item eventKey="Price (High to Low)" >Price (High to Low)</Dropdown.Item>
          </DropdownButton> */
		  
	  	
    );
	

  }
}

export default FilteredList;
