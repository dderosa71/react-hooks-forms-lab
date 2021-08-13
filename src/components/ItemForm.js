import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {selectedCategory, currentNameSearch, onItemFormSubmit}) {
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setItemCategory] = useState('Produce')

  function handleCategoryChange(event){
    setItemCategory(event.target.value)
  }
  function handleNameChange(event){
    setNewItemName(event.target.value)
  }

  function onSubmit(event){
    event.preventDefault()
    const newItem ={
      id: uuid(),
      name: newItemName,
      category: newItemCategory
    }
    onItemFormSubmit(newItem)
  }


  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input onChange={handleNameChange} type="text" name="name" />
      </label>
      <label>
        Category:
        <select onChange={handleCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
