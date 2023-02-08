import React from 'react';
import './Sub_Head/styles/head.css';
import { RxMagnifyingGlass } from 'react-icons/rx';

function Head() {
  return (
    <header className="header">
      <h1>MOCCA</h1>
      <div className="search-container">
        <form action="">
          <input type="search" placeholder="Search Mocca" className="search-field" />
          <button type="submit" className="search-button">
            <RxMagnifyingGlass className="icon-magnifying-glass" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Head;
