import React from 'react';
import images1 from './image/Image1.jpg';
import './home.css';
function Home() {
  return (
  
    <div className="home">
    <div className = 'home-left'>
  <img src={images1} alt='iamge' className='circular-image'/>
    </div>
    <div className= 'home-right'>
    <h1 className="home-title">Welcome to Glory Jeptoo's Blog</h1>
      <p className="home-description">
      Glory Jeptoo is an exceptional individual, currently pursuing her studies at Mount Kenya University. As a devoted student, she strives for academic excellence while also embodying strong moral values. Her unwavering faith and devotion to God are at the core of her character, as she finds great joy in serving the Lord. Glory's genuine love for others shines through her actions, as she consistently displays kindness and compassion towards those around her. She believes in the power of empathy and seeks to make a positive impact in the lives of others. With her combination of faith, love, and kindness, Glory Jeptoo is a remarkable individual making a difference in her community.





      </p>
    {/*<div className="home-buttons">
      <Link to="/about" className="home-button">
        Read More About Me
      </Link>
      <Link to="/blog" className="home-button">
        Visit the Blog
  </Link>
  </div>*/}
    
    </div>
      
    </div>
    
  )
}

export default Home

