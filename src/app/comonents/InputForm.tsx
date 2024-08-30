"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";

const InputForm = () => {
  const [todo, setTodo] = useState("");

  const handleTodo = (e:any) => {
    e.preventDefault();

    if(todo === ""){
        toast.error("Please write todo")
    }else{
        toast.success("todo added.!");
        setTodo("")
    }
  }
  return (
    <div>
      <form className="flex items-center gap-4 h-10 md:h-12 relative" onClick={handleTodo}>
        <input
          placeholder="Enter your Todo..."
          type="text"
          className="flex-1 h-full border-[1px] border-gray-600 bg-transparent pl-4 pr-6"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        {todo && (
          <MdClose onClick={() => setTodo("")} className="absolute top-3.5 text-lg right-28 hover:text-red-600 cursor-pointer duration-200" />
        )}
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default InputForm;
