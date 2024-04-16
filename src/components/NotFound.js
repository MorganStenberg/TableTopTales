import React from 'react'
import NoResults from "../assets/no-results.png";

import Asset from './Asset';

const NotFound = () => {
    return (
      <div>
        <Asset
          src={NoResults}
          message={`Sorry, the page could not be found`}
        />
      </div>
    );
  };

export default NotFound