import React from 'react';
import axios from 'axios';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Header from './Component/Header/Header'
import './App.css';
import { render } from '@testing-library/react';


class App extends React.Component {
  constructor(){
    super()
    this.state= {
      products: [],
      newImage: '',
      newProduct: '',
      newPrice: ''
    }

    this.addProduct = this.addProduct.bind(this)
    this.imageHandler = this.imageHandler.bind(this)
    this.productHandler =this.productHandler.bind(this)
    this.priceHandler = this.priceHandler.bind(this)
  }
  componentDidMount(){
    axios.get('/api/products').then.apply(res => {
      this.setState ({
        products: res.data
      })
    })
  }
  addProduct(){
    axios.post('/api/add_product', {
      image: this.state.newImage,
      product: this.state.newProduct,
      price: this.state.newPrice,
    }).then(res => {
      this.setState({
        products: res.data,
        newImage: '',
        newProduct: '',
        newPrice: ''
      })
    })
  }
  
  imageHandler(event){
    this.setState({
      newImage: event.target.value
    })
  }
  
  productHandler(event){
    this.setState({
      newProduct: event.target.value
    })
  }
priceHandler(event){
  this.setState({
    newPrice: event.target.value
  })
}
  render(){
    console.log(this.state)
  
  
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Form/>
        
    </div>
  );
}
}

export default App;
