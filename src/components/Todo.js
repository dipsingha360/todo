import React from "react";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

function Todo() {
  return (
    <div className="flex flex-col gap-4 w-screen h-screen justify-start py-20 items-center">
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
          />
          <AiOutlinePlus
            className=" text-orange-50 bg-transparent text-xl hover:text-orange-300 duration-300 cursor-pointer"
            title="Enter to add item"
          />
        </div>
      </div>

      {/* shows item  */}
      <div className="showItems bg-orange-50 px-5 rounded-md w-96 h-10  flex items-center hover: duration-300">
        <div className="eachItem bg-transparent w-screen flex  justify-between items-center">
          <h3 className="text-orange-800 font-medium bg-transparent ">
            Hello Title
          </h3>
          <AiOutlineDelete
            className="right-4 top-3 text-orange-800 bg-transparent font-bold text-xl hover:text-orange-800/50 duration-300 cursor-pointer"
            title="Delet item"
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
