import React from 'react';
import Items from './Items';

const ItemsList = ({ items }) => {
  return (
    <div className="w-3/4 ml-5">
      <div className="grid grid-cols-3 gap-3">
        {items.map((item, index) => (
          <Items key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
