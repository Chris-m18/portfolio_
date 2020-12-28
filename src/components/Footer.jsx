import React from 'react';
import "../css/Footer.scss"

const Footer = () => {
  return (
    <section className='boarder'>
      <div>
        <div className='footer'>
          <h3>Christian Matos</h3>
          <h5>&#169; 2020 All Rights Reserved.</h5>
        </div>
        <div className='contact'>
          <h2>Contact</h2>
          <h2 className='email'>Email: </h2>
          <h2 className='phone'></h2>
          <h2 className='office'></h2>
          <h2 className='hours'><a href="https://twitter.com/Chris_5001?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @Chris_5001</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;