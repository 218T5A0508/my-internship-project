import React from 'react';

const MemoryItem = ({ memory }) => {
  return (
    <div>
      <h2>{memory.title}</h2>
      <p>{memory.description}</p>
      {/* Display memory photo here */}
    </div>
  );
};

export default MemoryItem;
