import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Get started with Skyline</span>
                <span className="secondaryText">Subscribe and find super attractive price quotes from us.</span>
                <span className="secondaryText">Find your residence soon</span>
                <button className="button">
                    <a href="mailto:">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted