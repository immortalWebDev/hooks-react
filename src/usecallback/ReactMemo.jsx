import React from 'react';

// Child Component
const ItemList = ({ onItemClick }) => {
  console.log('ItemList Rendered');
  alert("child render")
  return (
    <div>
      <button onClick={() => onItemClick('Item 1')}>Item 1</button>
      <button onClick={() => onItemClick('Item 2')}>Item 2</button>
      <button onClick={() => onItemClick('Item 3')}>Item 3</button>
      <button onClick={() => onItemClick('Item 4')}>Item 4</button>
    </div>
  );
};


export default React.memo(ItemList)