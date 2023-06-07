import React, { FC, useState } from 'react';

interface SearchProps {
  search: string;
  searchHandler: (word: React.SetStateAction<string>) => void;
}

const SearchInput: FC<SearchProps> = ({ search, searchHandler }) => {
  return (
    <div className="dd__search">
      <input
        value={search}
        type="text"
        placeholder="Пошук..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchHandler(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
