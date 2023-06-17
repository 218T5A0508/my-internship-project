import React, { useState } from 'react';

const App = () => {
  const [memories, setMemories] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleAddMemory = () => {
    const newMemory = {
      title: title,
      description: description,
      photo: URL.createObjectURL(photo),
    };

    setMemories([...memories, newMemory]);
    setTitle('');
    setDescription('');
    setPhoto(null);
  };

  return (
    <div>
      <h1>Memories App</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <input type="file" onChange={handlePhotoChange} />
        <button onClick={handleAddMemory}>Add Memory</button>
      </div>
      <div>
        {memories.map((memory, index) => (
          <div key={index}>
            <h2>{memory.title}</h2>
            <p>{memory.description}</p>
            <img src={memory.photo} alt="Memory" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
