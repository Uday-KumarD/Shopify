import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../store/StoreContext';
import { toast } from 'react-toastify'


const ProductCard = ({product}) => {
  // console.log("ProductCard:",product)
  const {id,image,title,price,description,rating:{rate,count}} = product;

  let cardtitle = title.length<=50?title:title.slice(0,50)

  let {dispatch} = useCart()

  // handling the addtocart functionality
  function handleAddtoCart(product){
    // console.log(product)
    dispatch({type:"ADD_TO_CART",payload:product})
    toast.success("Added the item to the cart")
  }

  return (
    <div className='col-12 col-sm-12 sol-md-3 col-lg-3'>
      <div className="card shadow p-3">
      <Link to={`/shop/:${id}`} className='nav-link'>
        <img src={image} className="card-img-top product-img" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{cardtitle}</h5>
          <p className="card-title">{price}</p>
        </div>
      </Link>
        <button className='btn btn-success' onClick={()=>handleAddtoCart(product)}>Add to Cart</button>
      </div>
      
    </div>
  )
}

export default ProductCard