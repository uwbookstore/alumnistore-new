import { useState } from 'react';
import { useEscapeKey } from '../hooks';
import { Button } from '.';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };

  useEscapeKey(closeHandler);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        className='search search-btn'
        id='open-search'
        onClick={handleToggle}>
        <span className='sr-only'>Search</span>
      </Button>
      <div
        className={`search__overlay${isOpen ? ' open' : ''}`}
        id='search-overlay'>
        <div className='search__form-wrapper'>
          <div className='search__form'>
            <Button
              className='btn btn-close'
              id='close-search'
              onClick={handleToggle}>
              <span className='sr-only'>Close Search</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='47.99'
                height='48'
                viewBox='0 0 47.99 48'
                className='close-icon'>
                <path
                  d='M26.83,24l18.2-18.2a3.5,3.5,0,0,0-4.95-4.95L21.88,19.05,3.68.83A3.5,3.5,0,1,0,.73,5.78L18.91,24,.73,42.2a3.5,3.5,0,1,0,4.95,4.95L21.88,28.95l18.2,18.2a3.5,3.5,0,1,0,4.95-4.95Z'
                  transform='translate(0 -0.01)'
                  strokeMiterlimit='10'
                  strokeWidth='2'></path>
              </svg>
            </Button>
            <div className='search__form-input'>
              <label className='sr-only' htmlFor='searchinput'>
                Search
              </label>
              <input
                id='searchinput'
                type='search'
                className='search-field form-control'
                placeholder='Search...'
              />
              <Button className='search search-btn'>
                <span className='sr-only'>Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
