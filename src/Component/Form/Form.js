import React from 'react';


export default class AddProduct extends React.Component{
    
    render(){
        return(
            <div>
            
                <input
                type="text"
                className="imageInput"
                name="newImage"
                value={this.props.newImage}
                onChange={(e)=> this.props.imageHandler(e)}
                placeholder="..."
                />

                <input
                type="text"
                className="productInput"
                name="newProduct"
                value={this.props.newProduct}
                onChange={(e)=> this.props.productHandler(e)}
                placeholder="..."
                />
                
                 <input
                type="text"
                className="productInput"
                name="newProduct"
                value={this.props.newProduct}
                onChange={(e)=> this.props.priceHandler(e)}
                placeholder="..."
                />
                
            
                <button className="myButton" onClick={this.props.AddProduct}>Add to Inventory</button>
            </div>
        )
    }
}