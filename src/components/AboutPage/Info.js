import React from 'react';
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'

export default function Info() {
    return (
        <section>
          <div className="container">
           <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about" style={{background:"var(--darkGrey)"}} />
             </div>
             <div className="col-10 mx-auto col-md-6 my-3">
             <Title title="About Us" />
             <p className="text-lead text-muted my-3">This is the main checkout area of a retail store. 
              In other words, this is where shoppers head to when they’re ready to pay for their items.
              It’s where merchants set up their POS system and ring up sales
              It’s where merchants set up their POS system and ring up sales. 
              It’s where merchants set up their POS system and ring up sales.
            </p>
            <p className="text-lead text-muted my-3">This is the main checkout area of a retail store. 
              In other words, this is where shoppers head to when they’re ready to pay for their items.
              It’s where merchants set up their POS system and ring up sales. 
            </p>
            <button className="main-link" type="button" style={{marginTop:"2rem"}}>More Info</button>
            </div>
           </div>
          </div>
       </section>
    )
}
