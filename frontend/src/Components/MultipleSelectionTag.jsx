import React, { useState } from 'react';

function MultipleTagSelection() {
  const [selectedTags, setSelectedTags] = useState({});

  const availableTags = [
    "Dinner",
    "Lunch",
    "Indian",
    "Mediterranean",
    "Gluten Free",
    "Vegan",
    "Spicy",
    "Quick"
  ];

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
              {selectedTags[tag] && (
                  <span className="tag-icon">✓</span>
              )}
              <span className="tag-text">{tag}</span>
            </div>
        ))}
      </div>
  );
}

export default MultipleTagSelection;
