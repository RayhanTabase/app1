import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../../assets/search_icon.svg';
import './Search.css';

const Search = () => {
  const navigate = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleSearchBox = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if(searchText.trim() === '') return
    navigate(`/products/search/${searchText.trim()}/1/return`);
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search-container">
      <Breakpoint customQuery="(max-width: 768px)">
        {isSearchVisible && (
          <div className="search-mobile">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchInputChange}
                required
              />
            </form>
          </div>
        )}
        <p onClick={toggleSearchBox}>
          <img className="search-icon" src={SearchIcon} alt="search" />
        </p>
      </Breakpoint>
      <Breakpoint customQuery="(min-width: 768px)">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            id="searchBar"
            className="searchbar"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <button id="btnSearch" className="btn-search" type="submit">
            <img className="search-icon" src={SearchIcon} alt="search" />
          </button>
        </form>
      </Breakpoint>
    </div>
  );
};

export default Search;
