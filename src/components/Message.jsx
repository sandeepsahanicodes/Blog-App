import React from "react";

function Message({text}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black font-bold text-center h-full">
      <h1 className="text-xl">{text}</h1>
    </div>
  );
}

export default Message;
