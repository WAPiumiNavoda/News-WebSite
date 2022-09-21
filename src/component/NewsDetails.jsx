import React from 'react'
import '../component/CSS/NewDetails.css'

function NewsDetails() {
  return (
    <div>
        <div className="prodDetail">
            <div className="row4">
                 <div className="col">
                 <img src="https://i.ibb.co/n60tVS4/download.jpg" alt="image" class="productDet_images" />
                 </div>
                 <div className="col1">
                    <h1 className="produDet_h1">Beat EP</h1>
                    <p className="produDet_p">Fast Wireless Chargers For Your Phone, Tablet And Smart Watch. We have the largest selection of mobile phone and tablet accessories online.</p>
                    <hr />
                    <h2 className="deta_price">$24</h2>
                    <h4 className="produDet_h1" style={{color:"blue", fontSize:"17px"}}>Availble for free next day delivery</h4>
                    <button className="produBtn">Buy Now</button>
                 </div>
            </div>

            <div className="row5">
                 <div className="col5">
                    
                    <p className="produDet_p1">
                    A headset is a hardware device that connects to a telephone or computer,
                     allowing the user to talk and listen while keeping their hands free.
                     Headsets are commonly used in technical support and 
                    customer service centers, and allows the employee to talk to 
                    customer while typing information into a computer. They are also commonly used by 
                    computer gamers, allowing them to hear and talk with others, while using the keyboard 
                    and mouse to play the game. The picture shows a HyperX USB headset from Kingston with a 
                    microphone, which is an example of a popular type of headset used by online computer gamers.
                    </p>
        
                 </div>
            </div>
        </div>
    </div>
  )
}

export default NewsDetails