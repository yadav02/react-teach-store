import React, { Component } from 'react';
import {linkData} from './linkData'
import {socialData} from './socialData'
import {items} from './productData'

const ProductContext = React.createContext();

//Provider
// Consumer 

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: false
    }

    componentDidMount(){
        // from contentful items
        this.setProducts(items);
    }
    // set products
    setProducts = products => {
        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id, ...item.fields, image};
            return product
        });
        // console.log(storeProducts)

        // Featured Products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
        storeProducts,
        filteredProducts:storeProducts,
        featuredProducts,
        cart:this.getStorageCart(),
        singleProduct:this.getStorageProduct(),
        loding:false
      })
    };
    // Get cart from local storage
    getStorageCart = () => {
        return [];
    }
    // Get product from local storage
    getStorageProduct = () => {
        return [];
    } 
    // Get totals
    getTotal = () => {};
    // Add totals
    addTotal = () => {};
      // Sync stroge
    syncTotal = () => {};
      // Add to cart
    addToCart = (id) => {
         console.log(`Add to cart ${id}`)
      };
      // set single product
    setSingleProduct = (id) => {
        console.log(`set single product ${id}`)
    };

    // HandleSideBar
    handleSidebar = () => {
        console.log("clicked");
        this.setState({sidebarOpen:!this.state.sidebarOpen});
    }

    // Handle Cart
    handleCart = () => {
        this.setState({cartOpen:!this.state.cartOpen});
    }

    // closeCart
    closeCart = () => {
        this.setState({cartOpen: false});
    }

    // openCart
    openCart = () => {
        this.setState({cartOpen: true});
    }

    render() {
        return (
        <ProductContext.Provider value={{
            ...this.state,
            handleSidebar: this.handleSidebar,
            handleCart: this.handleCart,
            closeCart: this.closeCart,
            openCart: this.openCart,
            addToCart:this.addToCart,
            setSingleProduct:this.setSingleProduct
        }}>
          {this.props.children}
        </ProductContext.Provider>
        )   
    }
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer}