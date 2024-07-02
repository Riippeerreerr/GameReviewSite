"use client"
import React, { useState } from 'react';
import './SearchBar.css';
import Button from '../Button';

const SearchBar = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [platform, setPlatform] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the search logic here
    console.log('Search parameters:', { name, genre, releaseDate, platform });
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="release-date">Release Date:</label>
          <input
            type="date"
            id="release-date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="platform">Platform:</label>
          <input
            type="text"
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            required
          />
        </div>
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
