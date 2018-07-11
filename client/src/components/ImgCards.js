import React from 'react';
// import Friends from '../friends.json';






const renderImages = (props) => {
  const images = props.friends.map(function(image){
    return (
      <div className="card" style={{ float: 'left', margin: '20px' }} key={image.name}>
        <div className="img-container" style={{ width: '120px', height: '120px', overflow: 'hidden' }}>
          <img alt={image.name}src={image.image} style={{ display: 'block', height: '100%', margin: '0 auto' }} onClick={() => props.selectFriend(image.name)} />
        </div>
      </div>
    )
  })
  return images
}


const ImgCards = props => (
  <div className="container">
    {renderImages(props)}
  </div>
  );


export default ImgCards;