import { useState } from "react";
import DynamicModal from "../components/DynamicModal";
import LeafCard from "../components/LeafCard";
import { useModalContext } from "../context/ModalContext";

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

  const { isOpen, setIsOpen, title } = useModalContext();

  const [activeModal, setActiveModal] = useState(null); // Controla qual modal está ativo

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <div
        className="flex justify-start items-center h-screen bg-[#151435] overflow-hidden"
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
          <LeafCard
            leafTitle={"Arrays & hashing"}
            modal={() => openModal("modal1")}
          />

          <div className="grid grid-cols-2 gap-10">
            <LeafCard
              leafTitle={"Two pointers"}
              modal={() => openModal("modal2")}
            />
            <LeafCard leafTitle={"Stack"} modal={() => openModal("modal3")} />
          </div>

          <div className="grid grid-cols-3 gap-10">
            <LeafCard
              leafTitle={"Binray search"}
              modal={() => openModal("modal4")}
            />
            <LeafCard
              leafTitle={"Sliding window"}
              modal={() => openModal("modal5")}
            />
            <LeafCard
              leafTitle={"Linked list"}
              modal={() => openModal("modal6")}
            />
          </div>
          <div className="grid grid-cols-4 gap-10">
            <div className="col-start-2">
              <LeafCard leafTitle={"Trees"} modal={() => openModal("modal7")} />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div className="col-start-1 ">
              <LeafCard leafTitle={"Tries"} modal={() => openModal("modal8")} />
            </div>
            <div className="col-start-4">
              <LeafCard
                leafTitle={"Backtracking"}
                modal={() => openModal("modal9")}
              />
            </div>
          </div>

          <div className="grid grid-cols-5 place-items-center gap-10">
          <div className="col-start-2 ">
              <LeafCard leafTitle={"Heap"} modal={() => openModal("modal10")} />
            </div>
            <div className="col-start-4">
              <LeafCard
                leafTitle={"Graphs"}
                modal={() => openModal("modal11")}
              />
            </div>
            <div className="col-start-5">
              <LeafCard
                leafTitle={"1D DP"}
                modal={() => openModal("modal12")}
              />
            </div>
          </div>
          {/* 

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
        data={{
          leafTitle: "Arrays & hashing",
          leafMaxSize: 9,
          content: [
            { title: "Contains Duplicate", difficulty: "Easy" },
            { title: "Valid Anagram", difficulty: "Easy" },
            { title: "Two Sum ", difficulty: "Easy" },
            { title: "Group Anagrams", difficulty: "Medium" },
            { title: "Top K Frequent Elements", difficulty: "Medium" },
            { title: "Encode and Decode String", difficulty: "Medium" },
            { title: "Product of Array Except Self ", difficulty: "Medium" },
            { title: "Valid Sudoku ", difficulty: "Medium" },
            { title: "Longest Consecutive Sequence ", difficulty: "Hard" },
          ],
        }}
        isOpen={activeModal === "modal1"}
        onClose={closeModal}
        activeModal={activeModal}
      />

      <DynamicModal
        data={{
          leafTitle: "Two pointers",
          leafMaxSize: 5,
          content: [
            { title: "Valid Palindrome", difficulty: "Easy" },
            {
              title: "Two Sum II Input Array Is Sorted",
              difficulty: "Medium",
            },
            { title: "3Sum", difficulty: "Medium" },
            { title: "Container With Most Water", difficulty: "Medium" },
            { title: "Trapping Rain Water", difficulty: "Hard" },
          ],
        }}
        isOpen={activeModal === "modal2"}
        onClose={closeModal}
        activeModal={activeModal}
      />

      <DynamicModal
        data={{
          leafTitle: "Stack",
          leafMaxSize: 3,
          content: [
            { title: "Valid Parentheses", difficulty: "Easy" },
            { title: "Min Stack", difficulty: "Medium" },
            {
              title: "Evaluate Reverse Polish Notation",
              difficulty: "Medium",
            },
          ],
        }}
        isOpen={activeModal === "modal3"}
        onClose={closeModal}
        activeModal={activeModal}
      />

      <DynamicModal
        data={{
          leafTitle: "Bynary search",
          leafMaxSize: 3,
          content: [
            { title: "Binary Search", difficulty: "Easy" },
            { title: "Search a 2D Matrix", difficulty: "Medium" },
            { title: "Koko Eating Bananas", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal4"}
        onClose={closeModal}
        activeModal={activeModal}
      />

      <DynamicModal
        data={{
          leafTitle: "Sliding window",
          leafMaxSize: 3,
          content: [
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
          ],
        }}
        isOpen={activeModal === "modal5"}
        onClose={closeModal}
        activeModal={activeModal}
      />

      <DynamicModal
        data={{
          leafTitle: "Linked list",
          leafMaxSize: 3,
          content: [
            { title: "Reverse Linked List", difficulty: "Easy" },
            { title: "Merge Two Sorted Lists", difficulty: "Medium" },
            { title: "Reorder List", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal6"}
        onClose={closeModal}
        activeModal={activeModal}
      />

      <DynamicModal
        data={{
          leafTitle: "Trees",
          leafMaxSize: 3,
          content: [
            { title: "Invert Binary Tree", difficulty: "Easy" },
            { title: "Maximum Depth of Binary Tree", difficulty: "Easy" },
            { title: "Diameter of Binary Tree", difficulty: "Easy" },
          ],
        }}
        isOpen={activeModal === "modal7"}
        onClose={closeModal}
        activeModal={activeModal}
      />

      <DynamicModal
        data={{
          leafTitle: "Tries",
          leafMaxSize: 3,
          content: [
            { title: "Implement Trie Prefix Tree", difficulty: "Medium" },
            {
              title: "Design Add And Search Words Data Structure",
              difficulty: "Medium",
            },
            { title: "Word Search II", difficulty: "Hard" },
          ],
        }}
        isOpen={activeModal === "modal8"}
        onClose={closeModal}
        activeModal={activeModal}
      />

      <DynamicModal
        data={{
          leafTitle: "Backtracking",
          leafMaxSize: 3,
          content: [
            { title: "Subsets", difficulty: "Medium" },
            { title: "Combination Sum", difficulty: "Medium" },
            { title: "Permutations", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal9"}
        onClose={closeModal}
        activeModal={activeModal}
      />

<DynamicModal
        data={{
          leafTitle: "Heap",
          leafMaxSize: 3,
          content:[
            {
              title: "Kth Largest Element In a Stream",
              difficulty: "Easy",
            },
            { title: "Last Stone Weight", difficulty: "Easy" },
            { title: "K Closest Points to Origin", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal10"}
        onClose={closeModal}
        activeModal={activeModal}
      />

<DynamicModal
        data={{
          leafTitle: "Graphs",
          leafMaxSize: 3,
          content:[
            { title: "Number of Islands", difficulty: "Medium" },
            { title: "Max Area of Island", difficulty: "Medium" },
            { title: "Clone Graph", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal11"}
        onClose={closeModal}
        activeModal={activeModal}
      />

<DynamicModal
        data={{
          leafTitle: "1D DP",
          leafMaxSize: 3,
          content:[
            { title: "Climbing Stairs", difficulty: "Easy" },
            { title: "Min Cost Climbing Stairs", difficulty: "Easy" },
            { title: "House Robber", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal12"}
        onClose={closeModal}
        activeModal={activeModal}
      />
    </>
  );
}

export default TreemapPage;
