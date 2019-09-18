import React, {Component} from 'react';

import {storeProducts,detailProduct} from './data';

const ProductContext = React.createContext();
//proveedor
//consumidor



class ProductProvider extends Component{
    state={
        products:[],
        detailProduct:detailProduct
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item =>{
            const singleItem={...item};
            tempProducts = [...tempProducts,singleItem];
            
        });
        this.setState(()=>{
            return{products:tempProducts}
        });
    };
    handleDetail=()=>{
        console.log('hola, detalles');
    };
    addToCart=()=>{
        console.log('hola ,agregar al carrito');
    };
    /*tester =()=>{
        console.log('estado de productos:',this.state.products[0].inCart);
        console.log('data de productos:',storeProducts[0].inCart);
        
        const tempProducts=[...this.state.products];
        tempProducts[0].inCart=true
        this.setState(
        ()=>{
            return{products:tempProducts}
        },
        ()=>{
            console.log('estado de productos:',this.state.products[0].inCart);
            console.log('data de productos:',storeProducts[0].inCart);
         
        })
    };*/
    /* <button onClick={this.tester}>test me</button> esto en el render para prueba de estado*/
       

    render(){
        return(
            <ProductContext.Provider 
            value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
            }}>
           
            {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer=ProductContext.Consumer;

export{ProductProvider,ProductConsumer};