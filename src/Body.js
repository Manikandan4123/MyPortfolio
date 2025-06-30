import React from 'react'
import WapButton from './WapButton'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Body() {
  return (
    <div>    
    <header>
        <section id="Identity">
            <div className="overlay"></div>
            <div className="id_content">
                <p className="hi">Hi!</p>
                <p className="name">I am Manikandan</p>
                <p className="id-sub">FRONTEND WEB DEVELOPER</p>
                <button className="id-button">Visit my works</button>
            </div>
        </section>
    </header>
    <br/><br/>  
    <section id="About">
        <div className="about-cont">
            <img className="about_img" src="assets/images/MyPic_cropped.JPG" alt="Manikandan" height="300" width="200"/>
            <div className="me">
                <div className="me-heading">
                    <p>Who Am I ?</p>
                    <h2>About Me</h2>
                </div>
                    <p className="about-data">
                        A web developer with a Bachelor's degree in Information Technology and over six years of experience in front-end and back-end development. My skills include HTML, CSS, JavaScript, and React, and I've worked on numerous e-commerce and corporate websites. My portfolio reflects my commitment to creating responsive, user-friendly websites.
                    </p>  
            </div>  
        </div>
    </section>
    <br/><br/><br/>
    <section id="service">
        <div className="caption">
            <p>What I Do ?</p>
            <h2>Service</h2><br/>
        </div>
        <div className="service_data">
            <div className="box">
                <div className="display">
                    <img src="assets/images/pencil-case.svg" alt="pencil" width="100" height="100"/>
                    <p>Designer</p>
                </div>  
                <div className="box-content">
                    <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                </div>
            </div>
            <div className="box">
                <div className="display">
                    <img src="assets/images/responsive.svg" alt="responsive" width="100" height="100"/>
                    <p>Frontend Developer</p>
                </div>
                <div className="box-content">
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                </div>
                
            </div>
            <div className="box">
                <div className="display">
                    <img src="assets/images/toolbox.svg" alt="toolbox" width="100" height="100"/>
                    <p>Mentor</p>
                </div>
                <div className="box-content">
                    <p>I genuinely care about people, and enjoy helping them work on their craft.</p>
                </div>
            </div>
            <div className="box">
                <div className="display">
                    <img src="assets/images/analytics.svg" alt="analytics" width="100" height="100"/>
                    <p>App development</p>
                </div>
                <div className="box-content">
                    <p>Innovate, Create, Connect: Empowering the Digital World through App Development.</p>
                </div>
            </div>
        </div>
    </section>
    <br/><br/><br/>
    <section id="portfolio">
        <div className="portfolio-heading">
            <p>What I Did ?</p>
            <h2>Portfolio</h2><br/>
        </div>
        <div className="portfolio-content">
           
            <img src="assets/images/best-landing-page-examples-64e6080f990bb-sej.webp" alt="ex" height="350" width="400"/>
            <img src="assets/images/Screenshot-March-2018-Squarespace-Website-Homepage.png" alt="ex1" height="350" width="400"/>
            <img src="assets/images/Port1.jpg" alt="Port1" height="350" width="400"/>                     
        </div>
    </section>
    <br/><br/><br/>
    <section id="Pricing">
        <div className="price-heading">
            <p>How much I charge ?</p>
            <h2>My Pricing</h2>
        </div>
        <div className="price-details">
            <div className="price-box">
                <img src="assets/images/scooter.svg" alt="scooter" height="90" width="90"/>
                <h2>Free</h2>
                <div>
                    <p>Modern</p>
                    <p>Custom Design</p>
                    <p>Responsive & Accessible</p>
                    <p>x</p>
                    <p>x</p>
                    <p>x</p>
                    <p>x</p>
                    <p className="money">$0.00/Month</p>
                    <p><button>Subscribe</button></p>
                </div>
            </div>
            <div className="price-box">
                <img src="assets/images/shipped.svg" alt="shipped" height="90" width="90"/>
                <h2>Basic</h2>
                <div>
                    <p>Modern</p>
                    <p>Custom Design</p>
                    <p>Responsive & Accessible</p>
                    <p>Animation & Interaction</p>
                    <p>SEO & Page Speed Optimization</p>
                    <p>x</p>
                    <p>x</p>
                    <p className="money">$9.99/Month</p>
                    <p><button>Subscribe</button></p>
                </div>
            </div>
            <div className="price-box">
                <img src="assets/images/startup.svg" alt="stratup" height="90" width="90"/>
                <h2>Premium</h2>
                <div>
                    <p>Modern</p>
                    <p>Custom Design</p>
                    <p>Responsive & Accessible</p>
                    <p>Animation & Interaction</p>
                    <p>SEO & Page Speed Optimization</p>
                    <p>Self-Customizable Content</p>
                    <p>Conversion rate Optimization</p>
                    <p className="money">$99.99/Month</p>
                    <p><button>Subscribe</button></p>
                </div>
            </div>
        </div> 
    </section>
    <br/><br/><br/>
    <section id="Testimonial">
        <div className="test-heading">
            <p>What Think Client About Me ?</p>
            <h2>Testimonial</h2>
        </div>
        <div className="test-content"> 
            <div className="test-one">
                <div className="test-img">
                    <img src="assets/images/avatar2.jpg" alt="av2" height="100" width="100" className="test-img"/>
                </div>
                <div className="test-text">
                    <div className="text-box">
                        <p>I had a great experience working with [Developer's Name]. They were responsive, reliable, and flexible to meet our specific needs. The project went smoothly, and the team exceeded our expectations, The developer's attention to detail and creativity truly stood out. They went above and beyond to ensure our website reflected our brand's identity perfectly.<span className="author">&nbsp;&nbsp;&nbsp;-John</span></p>
                    </div>
                </div>    
            </div>
            <div className="test-two">
                <div className="test-img">
                    <img src="assets/images/avatar3.jpg" alt="av3" height="100" width="100" className="test-img"/>
                </div>
                <div className="text-box">
                    <p className="test-box">We were impressed with the developer's professional approach and their ability to explain complex technical concepts in a clear and concise manner The developer's expertise in [specific technology or framework] was invaluable. They helped us build a robust and user-friendly website that meets our needs. <span className="author">&nbsp;&nbsp;&nbsp;-Rebecca</span></p>
                </div>
            </div>
        </div>
    </section>
    <br/><br/><br/>
    <section id="blog">
        <div className="blog-heading">
            <p>Recent Posts?</p>
        <h2>Blog</h2>
        </div>
        <div className="blog-content">
            <div className="blog-one">
                <img src="assets/images/img-1.jpg" alt="img-1" height="200" width="300" className="blog-img"/>
                <p className="blog-text">At MK Creators, we’re more than just creators of exceptional software; we’re stewards of knowledge within the tech sphere. Our blog serves as a goldmine of articles, offering invaluable insights and real-world use cases tailored to professionals across the board—whether you’re a front-end aficionado, a back-end maestro, or a seasoned project manager.</p>
            </div>
            <br/><br/>
            <div className="blog-two">
                <img src="assets/images/img-2.jpg" alt="img-2" height="200" width="300" className="blog-img"/>
                <p className="blog-text">For a peek into the inner workings of a thriving e-commerce giant, look no further than Etsy’s tech blog – Code as Craft. It’s a treasure trove of experiences and challenges encountered while managing a large-scale e-commerce platform.</p>
            </div>
        </div>
    </section>
    <br/><br/><br/>
    <section id="contact">
        <div className="contact-heading">
            <p>How can you communicate ?</p>
            <h2>Contact Me</h2><br/>
        </div>
        <div className="contact-content">
            <form id="myForm">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" size="35" className="input-type" placeholder="Your Name Here" required/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" size="35" className="input-type" placeholder="Email to ask Help" required/><br/> 
                <div className="country">
                    <label htmlFor="country">Country: </label>
                    <select name="country" id="country" className="input-type">
                        <option>Where are you from ?</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="australia">Australia</option>
                    </select><br/>
                </div>
                <div className="message">
                    <label htmlFor="message">Message:</label><br/>
                    <textarea name="message" id="message" cols="60" rows="8"  className="input-type" placeholder="Something"></textarea><br/>
                    <input type="submit" value="Submit"  className="input-type input-button"/>
                    <input type="reset" value="Clear" className="input-type input-button"/>
                </div>
                <p id="status"></p>
            </form>
        </div>
    </section>
    <br/><br/><br/>
    <hr className="line-break"/>
    <section id="footer">
        <div className="footer-content">
            <p>Copyright 2034 &copy; MK CREATORS</p>
            <div className="top">
                <a className='fa' href="https://facebook.com" aria-label="Facebook">
                 <FaFacebook />
                </a>
                <a className='fa' href="https://facebook.com" aria-label="Facebook">
                <FaTwitter/>
                </a>
                <a className='fa' href="https://facebook.com" aria-label="Facebook">
                <FaLinkedin/>
                </a>
                <a className='fa' href="https://facebook.com" aria-label="Facebook">
                <FaInstagram/>
                </a>
            </div>
        </div>
    </section>
    <div className="back">
        <a href="#back" aria-label="Scroll to top">↑</a>
        <div className="tooltip">Back To Top</div>
    </div>
    <WapButton></WapButton>
    </div>
  )
}
