import React from 'react' ;
import Grocery from './Grocery';


const GroceryList = ({ items, groceryClick}) => {
  return (
    <>
    {
      items.map (item =>
      < Grocery
      key={item.id} {...item}
      groceryClick={groceryClick}
      />
      )
    }
    </>
  )
}
export default GroceryList;
