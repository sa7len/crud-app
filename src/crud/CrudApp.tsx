import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, updateItem } from "../redux/itemSlice";
import { RootState } from "../redux/store"; 
import { AppDispatch } from "../redux/store"; 
import { Item } from '../redux/itemSlice'; 

const CrudApp: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [edit, setEdit] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.crud.items);

  const handleAdd = () => {
    if (edit) {
      dispatch(updateItem({ id: edit, newData: { name: input } }));
      setEdit(null); 
    } else {
      dispatch(addItem({ id: Date.now().toString(), name: input, price: 0 }));
    }
    setInput("");
  };

  const handleDelete = (id: string) => {
    dispatch(deleteItem(id));
  };

const handleEdit = (id: string, currentName: string) => {
    setEdit(id);
    setInput(currentName);
};

  return (
    <div>
      <h1>CRUD App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={handleAdd}>{edit ? "Update Item" : "Add Item"}</button>

      <ul>
    {items.map((item: Item) => (
        <li key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item.id, item.name)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
    ))}
</ul>

    </div>
  );
};

export default CrudApp;
