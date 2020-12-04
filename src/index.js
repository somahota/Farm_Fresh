import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import QuickView from "./components/QuickView";
import FilteredList from './components/FilteredList';
import "./scss/style.scss";

import almonds from './almonds.jpg';
import apple from './apple.jpg';
import banana from './banana.jpg';
import beans from './beans.jpg';
import beetroot from './beetroot.jpg';
import brinjal from './brinjal.jpg';
import broccoli from './broccoli.jpg';
import mushroom from './button-mushroom.jpg';
import capsicum from './capsicum.jpg';
import carrot from './carrots.jpg';
import cashews from './cashews.jpg';
import cauli from './cauliflower.jpg';
import corn from './corn.jpg';
import cucumber from './cucumber.jpg';
import grapes from './grapes.jpg';
import mango from './mango.jpg';
import musk from './musk-melon.jpg';
import nuts from './nuts-mixture.jpg';
import onion from './onion.jpg';
import orange from './orange.jpg';
import pears from './pears.jpg';
import pista from './pista.jpg';
import pomo from './pomegranate.jpg';
import potato from './potato.jpg';
import pumpkin from './pumpkin.jpg';
import raspberry from './raspberry.jpg';
import strawberry from './strawberry.jpg';
import tomato from './tomato.jpg';
import walnuts from './walnuts.jpg';
import water_melon from './water-melon.jpg';


//list of products
const products =
 [
  {
    id: 1,
    name: "Brocolli - 1 Kg",
    price: 120,
    image: broccoli,
    type: "Vegetables",
	nutrients: "Fiber"
  },
  {
    id: 2,
    name: "Cauliflower - 1 Kg",
    price: 60,
    image: cauli,
    type: "Vegetables",
	nutrients: "Vitamins"
  },
  {
    id: 3,
    name: "Cucumber - 1 Kg",
    price: 48,
    image: cucumber,
    type: "Vegetables",
	nutrients: "Vitamins"
  },
  {
    id: 4,
    name: "Beetroot - 1 Kg",
    price: 32,
    image: beetroot,
    type: "Vegetables",
	nutrients: "Vitamins"
  },
  {
    id: 5,
    name: "Carrot - 1 Kg",
    price: 56,
    image: carrot,
    type: "Vegetables",
	nutrients: "Vitamins"
  },
  {
    id: 6,
    name: "Tomato - 1 Kg",
    price: 16,
    image: tomato,
    type: "Vegetables",
    nutrients: "Vitamins"
  },
  {
    id: 7,
    name: "Beans - 1 Kg",
    price: 82,
    image: beans,
    type: "Vegetables",
	nutrients: "Fiber"
  },
  {
    id: 8,
    name: "Brinjal - 1 Kg",
    price: 35,
    image: brinjal,
    type: "vegetables",
	nutrients: "Vitamins"
  },
  {
    id: 9,
    name: "Capsicum",
    price: 60,
    image: capsicum,
    type: "Vegetables",
	nutrients: "Vitamins"
  },
  {
    id: 10,
    name: "Mushroom - 1 Kg",
    price: 75,
    image: mushroom,
    type: "Vegetables",
	nutrients: "Vitamins"
  },
  {
    id: 11,
    name: "Potato - 1 Kg",
    price: 22,
    image: potato,
    type: "Vegetables",
	nutrients: "Carbs"
  },
  {
    id: 12,
    name: "Pumpkin - 1 Kg",
    price: 48,
    image: pumpkin,
    type: "Vegetables",
	nutrients: "Carbs"	
  },
  {
    id: 13,
    name: "Corn - 1 Kg",
    price: 75,
    image: corn,
    type: "Vegetables",
	nutrients: "Fiber"
  },
  {
    id: 14,
    name: "Onion - 1 Kg",
    price: 16,
    image: onion,
    type: "Vegetables",
	nutrients: "Vitamins"
  },
  {
    id: 15,
    name: "Apple - 1 Kg",
    price: 72,
    image: apple,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 16,
    name: "Banana - 1 Kg",
    price: 45,
    image: banana,
    type: "Fruits",
	nutrients: "Fiber"
  },
  {
    id: 17,
    name: "Grapes - 1 Kg",
    price: 60,
    image: grapes,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 18,
    name: "Mango - 1 Kg",
    price: 75,
    image: mango,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 19,
    name: "Musk Melon - 1 Kg",
    price: 36,
    image: musk,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 20,
    name: "Orange - 1 Kg",
    price: 75,
    image: orange,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 21,
    name: "Pears - 1 Kg",
    price: 69,
    image: pears,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 22,
    name: "Pomegranate - 1 Kg",
    price: 95,
    image: pomo,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 23,
    name: "Raspberry - 1/4 Kg",
    price: 160,
    image: raspberry,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 24,
    name: "Strawberry - 1/4 Kg",
    price: 180,
    image: strawberry,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 25,
    name: "Water Melon - 1 Kg",
    price: 28,
    image: water_melon,
    type: "Fruits",
	nutrients: "Vitamins"
  },
  {
    id: 26,
    name: "Almonds - 1/4 Kg",
    price: 200,
    image: almonds,
    type: "Nuts",
	nutrients: "Good Fats"
  },
  {
    id: 27,
    name: "Pista - 1/4 Kg",
    price: 190,
    image: pista,
    type: "Nuts",
	nutrients: "Good Fats"	
  },
  {
    id: 28,
    name: "Nuts Mixture - 1 Kg",
    price: 950,
    image: nuts,
    type: "Nuts",
	nutrients: "Good Fats"
  },
  {
    id: 29,
    name: "Cashews - 1 Kg",
    price: 650,
    image: cashews,
    type: "Nuts",
	nutrients: "Good Fats"
  },
  {
    id: 30,
    name: "Walnuts - 1/4 Kg",
    price: 170,
    image: walnuts,
    type: "Nuts",
	nutrients: "Good Fats"
  }
]
class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products,
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      type: "All",
	  nutrients: "All",
	  sort: "None",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleType = this.handleType.bind(this);
	this.handleNutrients = this.handleNutrients.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Type
  handleType(event) {
    this.setState({ type: event.target.value });
    console.log(this.state.type);
  }
     // Filter by Nutrients
    handleNutrients(event) {
    this.setState({ nutrients: event.target.value });
    console.log(this.state.nutrients);
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }
  // Open Modal for Quick View
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }

  render() {
    return (
      <div className="container">
	  
	  //Displays the header content containing the search bar and the cart along with their functionalities
        <Header
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleMobileSearch={this.handleMobileSearch}
          typeTerm={this.state.type}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />
		
	 //Displays the toolbar containing the 3 filters and 1 reset buttons along with their functionalities and displays the product card
		<FilteredList items={products}
		  handleType={this.handleType}
		  handleNutrients = {this.handleNutrients}
          searchTerm={this.state.term}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
		
		//Displays the footer content
        <Footer />
		
		//Loads the quick view functionality
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />
      </div>
    );
	
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




