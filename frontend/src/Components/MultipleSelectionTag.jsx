import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/MultipleSelectionTag.css'; // si tenés estilos

function MultipleSelectionTag({ onChange }) {
  const [selectedTags, setSelectedTags] = useState({});
  const [availableTags, setAvailableTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get('/api/filters');
      setAvailableTags(response.data.map(f => f.Name));
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const selected = Object.keys(selectedTags).filter(tag => selectedTags[tag]);
    onChange && onChange(selected); // ⬅️ envia las tags seleccionadas al padre
  }, [selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => ({
      ...prev,
      [tag]: !prev[tag]
    }));
  };

  return (
      <div className="tag-container">
        {availableTags.map((tag) => (
            <div
                key={tag}
                className={`tag ${selectedTags[tag] ? 'selected' : ''}`}
                onClick={() => toggleTag(tag)}
            >
              {selectedTags[tag] && <span className="tag-icon">✓</span>}
              <span className="tag-text">{tag}</span>
            </div>
        ))}
      </div>
  );
}

export default MultipleSelectionTag;
