import React from 'react';
import './Sub_Head/styles/head.css';
import { RxMagnifyingGlass } from 'react-icons/rx';

function Head() {
  return (
    <header className="header">
      <h1>MECCA</h1>
      <div className="free-shipping">Free shipping on orders of $60 or more</div>
      <div className="search-container">
        <form action="" onSubmit={(event) => {event.preventDefault()}}>
          <input type="search" placeholder="Search Mecca" className="search-field" />
          <button type="button" className="search-button">
            <RxMagnifyingGlass className="icon-magnifying-glass" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Head;
