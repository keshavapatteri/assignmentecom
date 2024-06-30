
import React from 'react';

import './dev.css'; 

function Services() {
  return (
    <div className='d-flex flex-column vh-100'>
      <h1 className='h1-name'>
        Services
      </h1>
      <h2 className='h2-name'>
        Our Services
      </h2>

      <div className="ecom-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xeWLTcqcwn3bfhHMr-dJ3hhdzS7acyUG5A&s"
          alt="Ecommerce Example"
          className="ecom-image" />

        <div className="ecom-text">
          <h2 className='ecom-h2'>What is eCom ?</h2>
          <p className='p-spacing'>
            Ecom Services is specialised e-commerce consultancy for brands<br />
            and entrepreneurs looking to strengthen their businesses in the<br />
            online world and reach the next level.
          </p>
        </div>
      </div>

     
    </div>
  );
}

export default Services;

 