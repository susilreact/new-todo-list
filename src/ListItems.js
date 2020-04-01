import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

const ListItems = ({ items, deleteItem, changeText }) => {
   const listItems = items.map((item) => {
      return (
         <div className='list' key={item.key}>
            <p>
               <input
                  type='text'
                  id={item.key}
                  value={item.text}
                  onChange={(e) => changeText(e.target.value, item.key)}
               />

               <span>
                  <FontAwesomeIcon
                     className='faicons'
                     icon='trash'
                     onClick={() => deleteItem(item.key)}
                  />
               </span>
            </p>
         </div>
      );
   });
   return (
      <div>
         <FlipMove duration={300} easing='ease-in-out'>
            {listItems}
         </FlipMove>
      </div>
   );
};
export default ListItems;
