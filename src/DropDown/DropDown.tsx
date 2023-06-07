import React, { Children, FC, useState, useEffect } from 'react';
import { Settings } from '../types';
import './DropDown.scss';
import ListItem from './UI/ListItem';
import SearchInput from './UI/SearchInput';

interface DropDownProps {
  settings: Settings;
}

const DropDown: FC<DropDownProps> = ({ settings }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const [variants, setVariants] = useState(settings.variants);

  function bttnHandler() {
    setIsOpen(!isOpen);
  }

  type HandlerType = (word: React.SetStateAction<string>) => void;
  const searchHandler: HandlerType = (word) => {
    setSearch(word);
  };

  React.useEffect(() => {
    const getData = setTimeout(() => {
      if (settings.customFetch) {
        const result = settings.customFetch(search);
        console.log(result);
      }
    }, 500);

    return () => clearTimeout(getData);
  }, [search]);

  return (
    <div className="dd__wrap">
      <div className="dd__header">
        <button className="dd__active-var" onClick={() => bttnHandler()}>
          <p>Оберіть ваше місто</p>
          <svg
            className={isOpen ? 'active' : ''}
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6L0 0H8L4 6Z" fill="#333333" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="dd__body">
          <SearchInput search={search} searchHandler={searchHandler} />
          <ul className="dd__list">
            <li>
              <button>Item 1</button>
            </li>
            <li>
              <button>Item 2</button>
            </li>
            {variants.map((item) => (
              <ListItem
                key={item.text}
                value={item.text}
                style={item.style ? item.style : {}}
                customClass={item.customClass}
              >
                {item.customElement}
              </ListItem>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
