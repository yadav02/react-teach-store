import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductImg from '../images/singleProductBcg.jpeg';
import {ProductConsumer} from '../context';


export default function SingleProductPage() {
    return (
        <>
        <Hero img={singleProductImg} title="Single Product"/>
        <ProductConsumer>
        {value => {
              const {singleProduct,addToCart,loading} = value;
          if(loading){
             console.log("hello from loading");
             return <h1>Product Loading....</h1>
          }
          const {company,description,id,price,title,image} = singleProduct;
          return <section className="py-5">
                    <div className="container">
                    <div className="row">
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img src={`../${image}`} alt="singleProductImg" className="img-fluid" />
                    </div>
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">Modle:{title}</h5>
                    <h5 className="text-capitalize text-muted">Company: {company}</h5>
                    <h5 className="text-main text-capitalize">Price:${price}</h5>
                    <p className="text-capitalize text-title mt-3">Some Info About Product :</p>
                    <p>{description}</p>
                    <button className="main-link" style={{margin:"0.75rem"}} onClick={() => addToCart(id)}>Add To Cart</button>
                    <Link to="/products" className="main-link" style={{margin:"0.75rem"}}>Back To Products</Link>
                   
                     </div>
                    </div>
                    </div>   
                </section>
        }}
        </ProductConsumer> 
        </>
    )
}
