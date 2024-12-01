import { useState } from "react";

function TreemapPage() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (e) => {
    e.preventDefault();

    let newScale = scale + e.deltaY * -0.01;
    newScale = Math.min(Math.max(0.5, newScale), 3);
    setScale(newScale);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastPosition.x;
    const deltaY = e.clientY - lastPosition.y;

    setPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }));

    setLastPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100 overflow-hidden"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      <div className="flex flex-col gap-16 bg-slate-500  items-center">
        <div className="bg-red-500 w-48 h-16 rounded-xl">
          <button>Arrays e hashing</button>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="bg-red-500 w-48 h-16 rounded-xl">
            <button>two pointers</button>
          </div>
          <div className="bg-red-500 w-48 h-16 rounded-xl">
            <button>stack</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="bg-red-500 w-48 h-16 rounded-xl">
            <button>bynary search</button>
          </div>
          <div className="bg-red-500 w-48 h-16 rounded-xl">
            <button>sliding window</button>
          </div>
          <div className="bg-red-500 w-48 h-16 rounded-xl">
            <button>linked list</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          <div className="bg-red-500 w-48 h-16 rounded-xl col-start-2">
            <button>trees</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          <div className="bg-red-500 w-48 h-16 rounded-xl col-start-1">
            <button>tries</button>
          </div>
          <div className="bg-red-500 w-48 h-16 rounded-xl col-start-4">
            <button>backtracking</button>
          </div>
        </div>

        <div className="grid grid-cols-5 place-items-center gap-10">
          <div className="bg-red-500 w-48 h-16 rounded-xl col-start-2">
            <button>heap</button>
          </div>

          <div className="bg-red-500 w-48 h-16 rounded-xl col-start-4">
            <button>graphs</button>
          </div>
          <div className="bg-red-500 w-48 h-16 rounded-xl col-start-5">
            <button>1d dp</button>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-10 ">
          <div className="bg-red-500 w-48 h-16 rounded-xl">
            <button>intervals</button>
          </div>
          <div className="bg-red-500 w-48 h-16 rounded-xl">
            <button>greedy</button>
          </div>
          <div className="bg-red-500 w-48 h-16 rounded-xl">
            <button>advanced graphs</button>
          </div>
          <div className="bg-red-500 w-48 h-16 rounded-xl col-start-5">
            <button>2d dp</button>
          </div>
          <div className="bg-red-500 w-48 h-16 rounded-xl col-start-6">
            <button>bit manipulation</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">
          <div className="bg-red-500 w-48 h-16 rounded-xl col-start-3">
            <button>math e geometry</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreemapPage;
