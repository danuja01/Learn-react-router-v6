import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque
        dignissimos totam facere, voluptas quae neque, distinctio quos libero ea
        fugiat dolorum obcaecati qui cumque, aut corrupti explicabo! Molestias,
        ratione.
      </p>

      <p>
        Go to the <Link to='/'> Home page </Link>
      </p>
    </div>
  );
};

export default NotFound;
