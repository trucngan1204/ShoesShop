import React, { Component } from 'react'
import ProductList from './ProductList'
import productData from './productData.json'
import Modal from './Modal'

export default class ShoesShop extends Component {
  
  render() {
    return (
    <div class="container">
        <div class="row">
          <div class="col-sm-3" style={{textAlign:'left', paddingTop:350}}>
            <div class="row" style={{cursor: 'pointer'}}>
                <div class="row-8 row-sm-6">
                  <p>Home</p>
                </div>
                <div class="row-4 row-sm-6">
                  <p>Shop</p>
                </div>
            </div>
          </div>
          <div class="col-sm-9">
                <h1 className='text-center'>Shoes Shop</h1> 
                <ProductList 
                  products = {productData}/>
              
          </div> 
            
        </div>
    </div>
    )
  }
}
