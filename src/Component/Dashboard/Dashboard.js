import React from 'react';
import Product from '../Product/Product';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.setState ={
            inventoryList: ['asdfa', 'adsfads', 12],
        }
        const mappedProducts = props.products.map(elem => {
        
                    return <div className="productReturn" key={elem.id}>
                        <div className="image">
                        {elem.image}
                        </div>
                        <div className="product">
                        {elem.product}
                        </div>
                        <div classname="price">
                        {elem.price}
                        </div>
                    </div>
                })
             return (
                    <div>
                        <Product/>
                    {mappedProducts}
                </div> )
    }
}
    // return <div>
    //     <h1>Dashboard</h1>
    //     <Product/>
    // </div>
