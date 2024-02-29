import React from "react";
import Framer from "./components/Framer";

const App = () => {
  return (
    <div>
      <div className="w-fill h-[100px] flex justify-center items-center text-center text-blue-700 text-4xl">
        My Framer Motion
      </div>
      <div>
        <Framer />
      </div>
    </div>
  );
};

export default App;
