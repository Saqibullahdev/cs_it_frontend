// SearchBar.js

import React from 'react';
import './Noticeboard.css';

const SearchBar = ({ onChange, value }) => {
  return (
    <section className=' container-fluid  noticeboardSection'>
      <div className=' search-center  container'>
        <input
          className="form-control"
          type="text"
          placeholder="enter year"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      
    </section>
    
  );
};

export default SearchBar;
