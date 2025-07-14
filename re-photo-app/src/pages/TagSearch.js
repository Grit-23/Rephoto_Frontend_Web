import React, { useState } from 'react';
import './TagSearch.css';

const dummyImages = [
  {
    id: 1,
    url: 'https://picsum.photos/300/300?random=1',
    tags: ['#2025']
  },
  {
    id: 2,
    url: 'https://picsum.photos/300/300?random=2',
    tags: ['#2025' ]
  },
  {
    id: 3,
    url: 'https://picsum.photos/300/300?random=3',
    tags: [ '#5월초']
  },
  {
    id: 4,
    url: 'https://picsum.photos/300/300?random=4',
    tags: ['#2025', '#5월초', '#바다']
  },
];

export default function TagSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [resultImages, setResultImages] = useState([]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setResultImages([]);
      return;
    }
    const results = dummyImages.filter(img =>
      img.tags.some(tag => tag.includes(searchQuery))
    );
    setResultImages(results);
  };

  return (
    <div className="tag-search-page">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="사진을 검색하세요"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {/* Tag List */}
      <div className="tag-list">
        {['#2025', '#5월초', '#바다'].map(tag => (
          <span key={tag} className="tag" onClick={() => setSearchQuery(tag)}>
            {tag}
          </span>
        ))}
      </div>

      {/* Image Grid */}
      {resultImages.length > 0 && (
        <div className="image-grid">
          {resultImages.map(img => (
            <img key={img.id} src={img.url} alt={`사진 ${img.id}`} />
          ))}
        </div>
      )}
    </div>
  );
}
