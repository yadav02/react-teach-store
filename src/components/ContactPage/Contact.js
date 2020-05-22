import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
         <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
           <Title title="Contact Us"/>
            <form className="mt-5">
                     {/*First Name */}
             <div className="form-group">
               <input type="text" name="firstName" className="form-control" placeholder="First Name"/>
             </div>
                    {/*Email */}
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Enter Your Email ID"/>
            </div>
                      {/* Subject */}
            <div className="form-group">
              <input type="text" name="subject" className="form-control" placeholder="Important!!"/>
             </div>
                      {/* Message */}
            <div className="form">
              <textarea name="message" className="form-control" rows="10" placeholder="Hello there buddy"/>
            </div>
         </form>
        </div>
     </div>
    </section>
    )
}
