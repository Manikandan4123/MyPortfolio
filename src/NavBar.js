import { useEffect, useState } from 'react';

function NavBar() {
  useEffect(() => {
    const header = document.querySelector('.nav-content');
    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('nav-content-scrolled');
      } else {
        header.classList.remove('nav-content-scrolled');
      }
    }; 
    window.addEventListener('scroll', onScroll);
  }, []);

  const[showList,setShowList] = useState("false");
  return (
    <nav className="nav-content"> 
      <div className="nav-logo">
          <h1><img src="assets/images/FullLogo_Transparent_NoBuffer.png" alt="img" height="80" width="230"/></h1>
      </div>
      <div className="navigation">
          <ul id="list" className={showList?'list':'list_hidden'}>
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#Testimonial">Testimonial</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
      <div id="container" className="container" onClick={()=>setShowList(!showList)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
      </div>
      <br/><br/>
    </nav>
  );
}



export default NavBar;