import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your book of choice</h2><br />
                <p className='header-text fs-18 fw-3'>Discover the perfect book tailored just for you. Whether you're searching for a thrilling mystery, a timeless classic, or the latest bestseller, our collection has something to spark every reader’s curiosity and passion. Dive into a world of stories and knowledge waiting to be explored.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header