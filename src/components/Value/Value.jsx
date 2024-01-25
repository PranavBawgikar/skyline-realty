import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/*Left Side*/}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>

            {/*Right Side*/}
            <div className="flexColStart v-right">
                <span className="orangeText">Our value</span>
                <span className="primaryText">The value we give to you</span>
                <span className="secondaryText">We are always ready to help with our best services.<br />We believe a good place to live can make your life better.</span>
            </div>
        </div>
    </section>
  )
}

export default Value