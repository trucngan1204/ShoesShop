import React, { Component } from 'react'
import Modal from './Modal';

export default class ProductItem extends Component {
  render() {
    const {product, onSelect} = this.props;


    return (
      <div className='card' >
        <img src={product.image} alt={product.name}
          style={{cursor: 'pointer'}}
          data-bs-toggle="modal"
          data-bs-target="#detail-modal"
          onClick = {()=> onSelect(product)}
        />
        <div className='card-body' style={{textAlign:'left'}}>
          <h3 className='card-title'>
            {product.name}
          </h3>
          <p className='card-text'>
            {product.price+`$`}
          </p>
          <p style={{background:'black', color:'#ffffff', textAlign:'center', width:150, height:40, paddingTop:7}}>add to carts <i class="fa fa-shopping-cart"></i></p>
        </div>
        
      </div>
    )
  }
}
