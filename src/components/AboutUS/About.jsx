import React from 'react'
import image1 from "../images/about-new.png"
import image2 from "../images/worldwide.png"
import image3 from "../images/high result.png"
import image4 from "../images/incentive result.png"
import './About.css'

const About = () => {
  return (
    <section id='about-sec h-[100rem]'>
      <div className='sec-heading'>
        <h1>Let's Know Everything About Us</h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <img src={image1} alt="" />
        </div>
        <div className="about-right">
          <h2>We are a leading technology company focused on innovation.</h2>
          <p>At Future Core Innovations, our mission is to push the boundaries of what's possible through innovative technology solutions. We are committed to fostering a culture of creativity and excellence, ensuring that we not only meet but exceed our clients' expectations. Our goal is to drive progress and transform industries, creating a better, more connected world for everyone.</p>
          <p>At Future Core Innovations, we take a holistic approach to innovation. We understand that true progress requires more than just cutting-edge technology; it demands a deep understanding of our clients' needs and a collaborative spirit. By combining strategic insight with technical expertise, we deliver tailored solutions that not only address immediate challenges but also pave the way for long-term success.</p>
        </div>
      </div>

      <div className="whychooseus">
        <h4>Why choose us</h4>
        <div className="choose-title">Why people select us</div>
        <div className="choose-content">
          <div className="content-ab">
            <div className="content-img">
              <img src={image2} alt="" />
            </div>
            <div className="heading">Worldwide Experience</div>
            <hr />
            <p>Our global expertise enables us to guide you through international challenges and opportunities with confidence, leveraging our deep market knowledge.</p>
          </div>
          <div className="content-ab">
            <div className="content-img">
              <img src={image3} alt="" />
            </div>
            <div className="heading">Incentive for Results</div>
            <hr />
            <p>We focus on achieving measurable outcomes, ensuring our objectives align with yours to drive exceptional performance and success at every stage.</p>
          </div>
          <div className="content-ab">
            <div className="content-img">
              <img src={image4} alt="" />
            </div>
            <div className="heading">High-Quality Results</div>
            <hr />
            <p>Our team delivers outstanding results, utilizing cutting-edge technologies and best practices to ensure every project meets the highest standards.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="numbers">
        <div className="figure">
          <div className="number">550+</div>
          <div className="number-name">Completed <br /> Work</div>
        </div>
        <div className="figure">
          <div className="number">1.2k</div>
          <div className="number-name">Business <br /> Covered</div>
        </div>

        <div className="figure">
          <div className="number">300+</div>
          <div className="number-name">Happy <br /> Clients</div>
        </div>
      </div>
    </section>
  )
}

export default About


