import React, { useRef } from 'react'
import './BodyContent.css'
import ImageContent from '../ImageContent/ImageContent'
import Typing from 'react-typing-effect'


function BodyContent() {

  // const typewriterRef = useRef(null);

  // const {text} = useTypewriter({
  //   ref: typewriterRef,
  //   words: ['Mentor With ', 'Vedio Conversations', 'Text Conversations', 'Library Facilities', 'Experience'],
  //   loop: true,
  //   typeSpeed:120,
  //   deleteSpeed: 80,
  // });

  // console.log('Text being typed:', text);

  return (
    <section className='hero'>

    <div className="left-section">

      <h1 id="heading">
        <span class="word">Find the <br/>  Best <br/> </span> 
        <span>
        <Typing 
            text={['Mentor With', 'Virtual Meeting', 'Text Exchange', 'Library Spaces', 'Experience']}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            className="typing-text"
          />
        </span>
        <span class="word"><br/> With Us </span> 
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