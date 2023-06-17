import React from 'react';

const MemoryList = ({ memories }) => {
  return (
    <div>
      {memories.map(memory => (
        <div key={memory.id}>
          <h2>{memory.title}</h2>
          <p>{memory.description}</p>
          {/* Display memory photo here */}
        </div>
      ))}
    </div>
  );
};

export default MemoryList;