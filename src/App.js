import React, { Component } from 'react';
import ListItems from './ListItems';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [],
         currentItems: {
            text: '',
            key: ''
         }
      };
   }
   addItem = (e) => {
      e.preventDefault();
      const newItem = this.state.currentItems;

      if (newItem.text !== '') {
         const newItems = [...this.state.items, newItem];

         this.setState({
            items: newItems,
            currentItems: {
               text: '',
               key: ''
            }
         });
      }
   };

   handleInput = (e) => {
      this.setState({
         currentItems: {
            text: e.target.value,
            key: Date.now()
         }
      });
   };
   deleteItem = (key) => {
      const filterItems = this.state.items.filter((item) => item.key !== key);
      this.setState({
         items: filterItems
      });
   };
   changeText = (text, key) => {
      const items = this.state.items;
      items.map((item) => {
         if (item.key === key) {
            item.text = text;
         }
      });
      this.setState({
         items: items
      });
   };

   render() {
      return (
         <div className='App'>
            <header>
               <form id='to-do-form' onSubmit={this.addItem}>
                  <input
                     type='text'
                     placeholder='text'
                     value={this.state.currentItems.text}
                     onChange={this.handleInput}
                  />
                  <button type='submit'> Add </button>
               </form>

               <ListItems
                  items={this.state.items}
                  deleteItem={this.deleteItem}
                  changeText={this.changeText}
               />
            </header>
         </div>
      );
   }
}

export default App;
