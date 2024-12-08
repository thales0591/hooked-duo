import { useState } from "react";
import DynamicModal from "./DynamicModal";

const LeafCard = ({data}, handleDynamicSidebar) => {
 

 

 
  return (
    <>
    <div
      className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
      onClick={() =>
        handleDynamicSidebar(data)
      }
    >
      <button>{data.leafTitle}</button>
    </div>

    
    </> 
  );
};

export default LeafCard;
