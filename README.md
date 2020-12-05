<h1> <strong> Farm Fresh </strong></h1>
An online grocery shopping application that caters to users' dietary needs while focussing on quick shopping.

<h2> Website Screenshot </h2>
<img src="https://res.cloudinary.com/soma/image/upload/v1607123353/ss_odfi1w.png" width = "800" alt = "Farm Fresh Screenshot">

<p> </p>

<h2> <strong> <u> How to Run  </u> </strong> </h2>
<ol>
  <li>  Clone or download this repository. </li>
<li> Open your terminal and cd into the folder of this repository. </li>
<li> Run npm install </li>
<li> Run npm update </li>
<li> Run npm start </li>
<li> The website will open in a localhost browser. </li>
</ol>

<p> </p>
<h2> <strong> <u>Architecture </strong> </u></h2>

<img src="https://res.cloudinary.com/soma/image/upload/v1607127324/arch_ieuvmt.png" width = "800" alt = "Architecture">

<p> </p>

<h2> <strong> <u>Data </strong> </u></h2>

Each product begins as a list of key-value pairs in index.js, which is passed to the Header to be filtered in the search bar and to update the cart and to the FilteredList to be filtered according to the current filter state and sort state as set by the dropdowns of the toolbar.
Then, the products are passed to the List component, that maps the list of key value pairs to the Product Component.
When a selection from a drop down button is made, a change in state is triggered and the list of products is appropriately filtered by the current state's filter and sort properties.
When the user increments or decrements the product quantity through the - and + button, a change in state is triggered and the quantity of product is updated by passing the Counter component in Product.
When the user clicks on 'Add to Cart', a change in state is triggered and the product quantity and price is updated on the cart. Additionally, the 'Add to Cart' button changes color for a few seconds (CSSTransition) and the Cart buzzes to denote that something has been added.
When the user hovers over the product and clicks on the zoom icon, the product image,name, and the price state are passed and displayed on the model.


<h2> <strong> <u>Packages used </strong> </u></h2>

<ul>
  <li> react-dom</li>
  <li> react-transition-group/CSSTransitionGroup </li>
  <li> react-bootstrap </li>
  </ul>


