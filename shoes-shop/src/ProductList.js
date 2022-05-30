import React, { Component } from 'react'
import Modal from './Modal';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  state = {
    selectedProduct: null,
  };


  handledetailProduct =(product) =>{
    console.log(product);
    this.setState({selectedProduct:product});
  }

  render() {
    const {products} = this.props;

    return (
      <div className='row'>
        {products.map((product)=>{
          return (
            <div key={product.id} 
            className='col-sm-4'
            >
              <ProductItem product={product} 
              onSelect = {this.handledetailProduct}/>
              <Modal product={this.state.selectedProduct}/>

            </div>
          )
        }
        )}
      </div>
    )
  }
}
