// src/components/StarRating.jsx
import React, { useState } from 'react';

export default function StarRating({ initialRating = 0, totalStars = 5 }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '4px', cursor: 'pointer', alignItems: 'center' }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              fontSize: '1.5rem',
              color: starValue <= (hover || rating) ? '#FFD700' : '#CCCCCC',
              transition: 'color 0.2s'
            }}
          >
            ★
          </span>
        );
      })}
      <span style={{ marginLeft: '8px', fontSize: '0.9rem', color: '#666' }}>
        ({rating}/{totalStars})
      </span>
    </div>
  );
}