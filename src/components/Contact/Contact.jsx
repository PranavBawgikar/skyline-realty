import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi' 

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className="orangeText">Our contacts</span>
                <span className="primaryText">Easy to contact us</span>
                <span className="secondaryText">
                    We are always ready to help by providing the best services for you. We believe a good place to live can make your life better.
                </span>
                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexColStart row">
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact