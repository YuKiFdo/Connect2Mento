import React from 'react'
import './BodyContent.css'
import ImageContent from '../ImageContent/ImageContent'


function BodyContent() {
  return (
    <section className='hero'>

    <div className="left-section">

      <h1 id="heading">
        
      <span class="word">Find </span> 
      <span class="word">the <br/></span> 
      <span class="word">Best <br/></span>
      <span class="word">Mentor </span> 
      <span class="word">With <br/></span> 
      <span class="word">Us</span>
      </h1>

      <div className='imgContainer'>
      <ImageContent/>
      </div>

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