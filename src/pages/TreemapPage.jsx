import { useState } from "react";
import Row from "../components/Row";
import LeafCard from "../components/LeafCard";
import DynamicModal from "../components/DynamicModal";

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

  const [contentStack, setContentStack] = useState([]);
  const [title, setTitle] = useState("");
  const [maxSize, setMaxSize] = useState(0);
  const [actualSize, setActualSize] = useState(0);

  const handleDynamicSidebar = (leafTitle, leafMaxSize, content) => {
    setTitle(leafTitle);
    setMaxSize(leafMaxSize);
    setContentStack(content);
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Cálculo da barra pai (média ou soma, dependendo da lógica desejada)
  const [parentProgress, setParentProgress] = useState(0); // Limita a 100%
  

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
          
              <LeafCard data={{
                leafTitle: "Arrays & hashing", 
                leafMaxSize: 9, 
                content: [
                { title: "Contains Duplicate", difficulty: "Easy" },
                { title: "Valid Anagram", difficulty: "Easy" },
                { title: "Two Sum ", difficulty: "Easy" },
                { title: "Group Anagrams", difficulty: "Medium" },
                { title: "Top K Frequent Elements", difficulty: "Medium" },
                { title: "Encode and Decode String", difficulty: "Medium" },
                { title: "Product of Array Except Self ",difficulty: "Medium"},
                { title: "Valid Sudoku ", difficulty: "Medium" },
                { title: "Longest Consecutive Sequence ", difficulty: "Hard" }
              ]
            }} handleDynamicSidebar={handleDynamicSidebar} />
            
          {/* <div className="grid grid-cols-2 gap-10">
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Two pointers", 5, [
                  { title: "Valid Palindrome", difficulty: "Easy" },
                  {
                    title: "Two Sum II Input Array Is Sorted",
                    difficulty: "Medium",
                  },
                  { title: "3Sum", difficulty: "Medium" },
                  { title: "Container With Most Water", difficulty: "Medium" },
                  { title: "Trapping Rain Water", difficulty: "Hard" },
                ])
              }
            >
              <button>Two pointers</button>
            </div>
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Stack", 3, [
                  { title: "Valid Parentheses", difficulty: "Easy" },
                  { title: "Min Stack", difficulty: "Medium" },
                  {
                    title: "Evaluate Reverse Polish Notation",
                    difficulty: "Medium",
                  },
                ])
              }
            >
              <button>Stack</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Bynary search", 3, [
                  { title: "Binary Search", difficulty: "Easy" },
                  { title: "Search a 2D Matrix", difficulty: "Medium" },
                  { title: "Koko Eating Bananas", difficulty: "Medium" },
                ])
              }
            >
              <button>Bynary search</button>
            </div>
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Sliding window", 3, [
                  {
                    title: "Best Time to Buy And Sell Stock",
                    difficulty: "Easy",
                  },
                  {
                    title: "Longest Substring Without Repeating Characters",
                    difficulty: "Medium",
                  },
                  {
                    title: "Longest Repeating Character Replacement",
                    difficulty: "Medium",
                  },
                ])
              }
            >
              <button>Sliding window</button>
            </div>
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Linked list", 3, [
                  { title: "Reverse Linked List", difficulty: "Easy" },
                  { title: "Merge Two Sorted Lists", difficulty: "Medium" },
                  { title: "Reorder List", difficulty: "Medium" },
                ])
              }
            >
              <button>Linked list</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-2 cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Trees", 3, [
                  { title: "Invert Binary Tree", difficulty: "Easy" },
                  { title: "Maximum Depth of Binary Tree", difficulty: "Easy" },
                  { title: "Diameter of Binary Tree", difficulty: "Easy" },
                ])
              }
            >
              <button>Trees</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-1 cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Tries", 3, [
                  { title: "Implement Trie Prefix Tree", difficulty: "Medium" },
                  {
                    title: "Design Add And Search Words Data Structure",
                    difficulty: "Medium",
                  },
                  { title: "Word Search II", difficulty: "Hard" },
                ])
              }
            >
              <button>Tries</button>
            </div>
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-4 cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Backtracking", 3, [
                  { title: "Subsets", difficulty: "Medium" },
                  { title: "Combination Sum", difficulty: "Medium" },
                  { title: "Permutations", difficulty: "Medium" },
                ])
              }
            >
              <button>Backtracking</button>
            </div>
          </div>

          <div className="grid grid-cols-5 place-items-center gap-10">
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-2 cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Heap", 3, [
                  {
                    title: "Kth Largest Element In a Stream",
                    difficulty: "Easy",
                  },
                  { title: "Last Stone Weight", difficulty: "Easy" },
                  { title: "K Closest Points to Origin", difficulty: "Medium" },
                ])
              }
            >
              <button>Heap</button>
            </div>

            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-4 cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Graphs", 3, [
                  { title: "Number of Islands", difficulty: "Medium" },
                  { title: "Max Area of Island", difficulty: "Medium" },
                  { title: "Clone Graph", difficulty: "Medium" },
                ])
              }
            >
              <button>Graphs</button>
            </div>
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-5 cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("1D DP", 3, [
                  { title: "Climbing Stairs", difficulty: "Easy" },
                  { title: "Min Cost Climbing Stairs", difficulty: "Easy" },
                  { title: "House Robber", difficulty: "Medium" },
                ])
              }
            >
              <button>1D DP</button>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-10 ">
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Intervals", 3, [
                  { title: "Insert Interval", difficulty: "Medium" },
                  { title: "Merge Intervals", difficulty: "Medium" },
                  { title: "Non Overlapping Intervals", difficulty: "Medium" },
                ])
              }
            >
              <button>Intervals</button>
            </div>
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Greedy", 3, [
                  { title: "Maximum Subarray", difficulty: "Medium" },
                  { title: "Jump Game", difficulty: "Medium" },
                  { title: "Jump Game II", difficulty: "Medium" },
                ])
              }
            >
              <button>Greedy</button>
            </div>
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Advanced graphs", 3, [
                  { title: "Reconstruct Itinerary", difficulty: "Hard" },
                  {
                    title: "Min Cost to Connect All Points",
                    difficulty: "Medium",
                  },
                  { title: "Network Delay Time", difficulty: "Medium" },
                ])
              }
            >
              <button>Advanced graphs</button>
            </div>
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-5 cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("2D DP", 3, [
                  { title: "Unique Paths", difficulty: "Hard" },
                  { title: "Longest Common Subsequence", difficulty: "Medium" },
                  {
                    title: "Best Time to Buy And Sell Stock With Cooldown ",
                    difficulty: "Medium",
                  },
                ])
              }
            >
              <button>2D DP</button>
            </div>
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-6 cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Bit manipulation", 3, [
                  { title: "Single Number", difficulty: "Easy" },
                  { title: "Number of 1 Bits", difficulty: "Easy" },
                  { title: "Counting Bits", difficulty: "Easy" },
                ])
              }
            >
              <button>Bit manipulation</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div
              className="bg-[#5316CC] w-48 h-16 rounded-xl col-start-3 cursor-pointer"
              onClick={() =>
                handleDynamicSidebar("Math e geometry", 3, [
                  { title: "Rotate Image", difficulty: "Medium" },
                  { title: "Spiral Matrix", difficulty: "Medium" },
                  { title: "Set Matrix Zeroes  ", difficulty: "Medium" },
                ])
              }
            >
              <button>Math e geometry</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="fixed right-0 top-0 w-64 h-full bg-[#26236b] shadow-lg pointer-events-none text-white rounded-xl">
        <p className="p-4">opa</p>
        <p className="p-4">progress bar aq man</p>
      </div>

      <DynamicModal 
    isOpen={isOpen} 
    toggleSidebar={toggleSidebar} 
    title={data.leafTitle} 
    actualSize={ actualSize }
    maxSize={maxSize }
    parentProgress={parentProgress}
    data={data}/>

      {/* <div className="relative">
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
          <div className="flex flex-col items-center font-semibold">
            <h1 className="text-3xl pt-5">{title}</h1>

        
            <h1 className="mt-6 mb-2">
              ( {actualSize} / {maxSize} )
            </h1>
            <div className="mb-6 w-full flex justify-center">
              <div className="w-1/3 bg-gray-300 rounded-full">
                <div
                  className={`bg-[#28ca99] h-3 rounded-full transition-all duration-300`}
                  style={{
                    width: parentProgress > 0 ? `${parentProgress}%` : "0",
                  }}
                ></div>
              </div>
            </div>

            <h1>pre requisites</h1>

            <div className="w-[90%]">
              <div className="flex flex-row mt-10 justify-around w-full border-b-2 pb-2 border-gray-500 ">
                <div className="w-[43px]">
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

              {contentStack.length > 0 &&
                contentStack.map((item, index) => (
                  <Row
                    key={index}
                    problem={item}
                    parentProgress={parentProgress}
                    setParentProgress={setParentProgress}
                    actualSize={actualSize}
                    setActualSize={setActualSize}
                    maxSize={maxSize}
                    setMaxSize={setMaxSize}
                  />
                ))}
            </div>
          </div>
        </div>
      </div> */}

      
    </>
  );
}

export default TreemapPage;
