"use client"
import React, { useState } from 'react';
import './SearchBar.css';
import Button from '../Button';

const SearchBar = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [platform, setPlatform] = useState('');

  const handleSubmit = async () => {
    console.log('Search parameters:', { name, genre, releaseDate, platform });

    await fetch("http://localhost:3000/api/getgames",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, genre ,releaseDate, platform }),
    });
  }

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
          />
        </div>
        <div className="form-group">
          <label htmlFor="release-date">Release Date:</label>
          <input
            type="date"
            id="release-date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="platform">Platform:</label>
          <input
            type="text"
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit}>Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
