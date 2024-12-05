import { useState } from "react";
import Row from "../components/Row";

function TreemapPage() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (e) => {
    e.preventDefault();

    let newScale = scale + e.deltaY * -0.01;
    newScale = Math.min(Math.max(0.5, newScale), 3);
    if (scale == 0.5 && e.deltaY < 0) {
      setScale(1);
    } else {
      setScale(newScale);
    }
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

  // cores da borderless:
  // azul claro:#5316CC
  // azul escuro:#1C194E
  // verde claro: #2DEBB1
  // verde escuro: #0A3A2E

  const [isOpen, setIsOpen] = useState(false);

  const handleDynamicSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <>
      <div
        className="flex justify-start items-center h-screen bg-[#151435] overflow-hidden "
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
        <div className="flex flex-col gap-16  items-center text-white text-center font-roboto font-medium ">
          <div
            className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
            onClick={() => handleDynamicSidebar("falaa krlh")}
          >
            <button>Arrays e hashing</button>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl">
              <button>Two pointers</button>
            </div>
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl">
              <button>Stack</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl">
              <button>Bynary search</button>
            </div>
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl">
              <button>Sliding window</button>
            </div>
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl">
              <button>Linked list</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-2">
              <button>Trees</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-1">
              <button>Tries</button>
            </div>
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-4">
              <button>Backtracking</button>
            </div>
          </div>

          <div className="grid grid-cols-5 place-items-center gap-10">
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-2">
              <button>Heap</button>
            </div>

            <div className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-4">
              <button>Graphs</button>
            </div>
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-5">
              <button>1D DP</button>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-10 ">
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl">
              <button>Intervals</button>
            </div>
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl">
              <button>Greedy</button>
            </div>
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl ">
              <button>Advanced graphs</button>
            </div>
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-5">
              <button>2D DP</button>
            </div>
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-6">
              <button>Bit manipulation</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-3">
              <button>Math e geometry</button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed right-0 top-0 w-64 h-full bg-[#26236b] shadow-lg pointer-events-none text-white rounded-xl">
        <p className="p-4">opa</p>
        <p className="p-4">progress bar aq man</p>
      </div>

      <div className="relative">
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 
              ${
                isOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
          onClick={() => toggleSidebar()}
        ></div>
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-[#26236b] shadow-lg transform text-white transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center ">
            <h1>nome da leaf</h1>
            <h1>progrss bar</h1>
            <h1>pre requisites</h1>
            <div className="w-[90%]">
              <div className="flex flex-row mt-10 justify-around w-full border-b-2 pb-2 border-gray-500 ">
                <div className="w-[50px]">
                  <h1>Status</h1>
                </div>

                <div className="flex gap-52 w-[780px]">
                <div className="w-[30px] justify-center">
                    <h1>Star</h1>
                  </div>
                  <h1 className="w-64">Problem</h1>
                  <h1 className="w-[65px]">Difficulty</h1>
                </div>

                <div className="w-[60px]">
                  <h1>Solution</h1>
                </div>
              </div>

              <Row problem={{name: "opa", difficulty: "easy"}}/>
            </div>
          </div>
        </div>
      </div>

      {/* <Sidebar/> */}
    </>
  );
}

export default TreemapPage;
