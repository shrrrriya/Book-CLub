import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>The idea for BookHub came from my love for books and my frustration with the difficulty of finding the right book quickly online. As one of my very first projects while learning React, I challenged myself to build a sleek, user-friendly book search website that lets you effortlessly discover books on any topic or author you can imagine.</p>
            <p className='fs-17'>Getting this project off the ground wasn’t without its hurdles. I struggled quite a bit with making API calls work smoothly — handling asynchronous data fetching and managing state were new to me and often tricky. But through persistence, debugging, and a ton of learning, I finally nailed it and built a fully functional, responsive site that delivers accurate book results in real time.</p>
            <p className='fs-17'>BookHub is more than just a project — it’s proof of my ability to take on challenges, learn fast, and build something useful from scratch. On the website, you can simply type in a search term and instantly explore a vast library of books, making your book hunt faster and more enjoyable than ever.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
