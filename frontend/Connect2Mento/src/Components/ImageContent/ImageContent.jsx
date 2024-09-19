import React from 'react'

function ImageContent() {
  return (
    <div className="image-container">
          <div className="rounded-square">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc50862707418c15bbece426846ab5ab8a955891b8683b4192eb461c80e7b67b?placeholderIfAbsent=true&apiKey=96193bacd4914dd1a94d2a0329d6af25"
              alt="Mentor in action"
            />
            
          </div>
          <div className="circular-image">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d8a498790608aa26c655186b9066e947e1a892590513f955f815eb7f9511403?placeholderIfAbsent=true&apiKey=96193bacd4914dd1a94d2a0329d6af25"
              alt="Mentor portrait"
              />
          </div>
    </div>
  )
}

export default ImageContent