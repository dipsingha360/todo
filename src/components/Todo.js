import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

function Todo() {
  // get data from local storage
  const getLocal = () => {
    let list = localStorage.getItem("lists");
    // console.log(list);
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };

  //useState
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState(getLocal());

  //useEffect
  useEffect(() => {
    // add data to local storege
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  // event handlers
  const addItem = () => {
    inputItem ? setItems([...items, inputItem]) : alert("First add your task");
    setInputItem("");
  };

  const deleteItem = (index) => {
    const filteredItems = items.filter((item, id) => {
      return index !== id;
    });
    setItems(filteredItems);
  };

  const deleteAll = () => {
    setItems([]);
  };

  return (
    <div className="flex flex-col gap-4 w-screen justify-start py-20 items-center">
      <div className="title flex flex-col gap-3 mb-10 justify-center items-center ">
        <h1 className="text-6xl font-semibold text-white">
          To<span className="text-orange-500 ">Do</span>
        </h1>
        <p className="text-white tracking-widest uppercase text-xs">
          Add your list here
        </p>
      </div>

      {/* add items  */}
      <div className="addItems bg-orange-500 px-5 rounded-md w-96 h-10 flex items-center">
        <div className="eachItem bg-transparent w-screen flex  justify-between items-center">
          <input
            type="text"
            placeholder="add task..."
            className="bg-transparent outline-none text-orange-50 text-sm w-[90%] placeholder-orange-50/60"
            title="Add item"
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
          />
          <AiOutlinePlus
            className=" text-orange-50 bg-transparent text-xl hover:text-orange-300 duration-300 cursor-pointer"
            title="Click to add item"
            onClick={addItem}
          />
        </div>
      </div>

      {/* shows item  */}
      {items.map((item, index) => (
        <div
          className="showItems bg-orange-50 px-5 rounded-md w-96 h-10  flex items-center hover: duration-300"
          key={index}
        >
          <div className="eachItem bg-transparent w-screen flex  justify-between items-center">
            <h3 className="text-orange-800 font-medium bg-transparent ">
              {item}
            </h3>
            <AiOutlineDelete
              className="right-4 top-3 text-orange-800 bg-transparent font-bold text-xl hover:text-orange-800/50 duration-300 cursor-pointer"
              title="Delet item"
              onClick={() => deleteItem(index)}
            />
          </div>
        </div>
      ))}

      <button
        className="bg-orange-500 px-5 py-1 rounded font-medium text-orange-50 hover:bg-orange-500/90 duration-300 mt-2"
        onClick={deleteAll}
      >
        {items.length > 0 ? "Remove all" : ""}
      </button>
    </div>
  );
}

export default Todo;
