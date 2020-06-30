import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      style={{ backgroundColor: 'rgba(20, 22, 33, 0.2)', width: '200px' }}
    >
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
