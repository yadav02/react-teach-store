import React from 'react';
import {ProductConsumer} from '../../context';
import Title from '../Title.js';
import Product from '../Product';


export default function Products() {
    return (
        <ProductConsumer>
        {value => {
            const {filteredProducts} = value;
            return (
              <section className="py-5">
               <div className="container">
                <Title center title="Our Products"/>
                 <div className="row">
                   {filteredProducts.map(product => {
                    return <Product key={product.id} product={product} />
                })}
                </div>
               </div>
              </section>

            )
        }}
        </ProductConsumer>
    )
}
