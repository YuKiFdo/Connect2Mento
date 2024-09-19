import React from 'react'
import './BodyContent.css'


function BodyContent() {
  return (
    <section className='hero'>

    <div className="left-section">

      <h1 className="heading">
        Find the <br /> Best <br /> Mentor with <br /> Us
      </h1>

        <div className="searchbar">
          <input 
            type="text" 
            placeholder="Search career, skill or role" 
            className="search-input"
          />
            <button className="search-btn">Find Mentors</button>
        </div>

          <div className="tags-container">
            <span className="tag">Web Developers</span>
            <span className="tag">Lawyers</span>
            <span className="tag">UX Engineers</span>
            <span className="tag">QA Engineers</span>
            <span className="tag">Career Coaches</span>
          </div>
    </div>
        
    </section>

    
    
    
  

    
  )
}

export default BodyContent