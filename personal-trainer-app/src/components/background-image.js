import React from 'react';
import image from '../img/landscape-banner.jpg'

class BackgroundImage extends React.Component {
  render() {
    return (
      <div className="background-image">
        <img src={image} />
      </div>
    )
  }
}

export default BackgroundImage;
