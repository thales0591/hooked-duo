import { useState } from "react";
import DynamicModal from "../components/DynamicModal";
import LeafCard from "../components/LeafCard";
import Pointer from "../components/Pointer";
import Sidebar from "../components/Sidebar";

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

  const [totalProgress, setTotalProgress] = useState(65);

  const [activeModal, setActiveModal] = useState(null); // Controla qual modal está ativo

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const [parentProgress1, setParentProgress1] = useState(0);
  const [parentProgress2, setParentProgress2] = useState(0);
  const [parentProgress3, setParentProgress3] = useState(0);
  const [parentProgress4, setParentProgress4] = useState(0);
  const [parentProgress5, setParentProgress5] = useState(0);
  const [parentProgress6, setParentProgress6] = useState(0);
  const [parentProgress7, setParentProgress7] = useState(0);
  const [parentProgress8, setParentProgress8] = useState(0);
  const [parentProgress9, setParentProgress9] = useState(0);
  const [parentProgress10, setParentProgress10] = useState(0);
  const [parentProgress11, setParentProgress11] = useState(0);
  const [parentProgress12, setParentProgress12] = useState(0);
  const [parentProgress13, setParentProgress13] = useState(0);
  const [parentProgress14, setParentProgress14] = useState(0);
  const [parentProgress15, setParentProgress15] = useState(0);
  const [parentProgress16, setParentProgress16] = useState(0);
  const [parentProgress17, setParentProgress17] = useState(0);
  const [parentProgress18, setParentProgress18] = useState(0);

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
        <div className="flex flex-col items-center text-white text-center font-roboto font-medium ">
          <LeafCard
            leafTitle={"Arrays & hashing"}
            modal={() => openModal("modal1")}
            parentProgress={parentProgress1}
          />

          <div className="flex flex-row">
            <Pointer width={"96"} x1={"96"} y1={"0"} x2={"0"} y2={"64"} />
            <Pointer width={"96"} x1={"0"} y1={"0"} x2={"96"} y2={"64"} />
          </div>

          <div className="grid grid-cols-2 gap-10">
            <LeafCard
              leafTitle={"Two pointers"}
              modal={() => openModal("modal2")}
              parentProgress={parentProgress2}
            />
            <LeafCard
              leafTitle={"Stack"}
              modal={() => openModal("modal3")}
              parentProgress={parentProgress3}
            />
          </div>

          <div className="flex flex-row">
            <svg width="480" height="64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker
                  id="seta1"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta2"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta3"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>
              </defs>

              <line
                x1="120"
                y1="0"
                x2="0"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="120"
                y1="0"
                x2="240"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="120"
                y1="0"
                x2="480"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <LeafCard
              leafTitle={"Binary search"}
              modal={() => openModal("modal4")}
              parentProgress={parentProgress4}
            />
            <LeafCard
              leafTitle={"Sliding window"}
              modal={() => openModal("modal5")}
              parentProgress={parentProgress5}
            />
            <LeafCard
              leafTitle={"Linked list"}
              modal={() => openModal("modal6")}
              parentProgress={parentProgress6}
            />
          </div>

          <div className="flex flex-row">
            <svg width="480" height="64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker
                  id="seta1"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta2"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>
              </defs>

              <line
                x1="0"
                y1="0"
                x2="120"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="480"
                y1="0"
                x2="120"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div className="col-start-2">
              <LeafCard
                leafTitle={"Trees"}
                modal={() => openModal("modal7")}
                parentProgress={parentProgress7}
              />
            </div>
          </div>

          <div className="flex flex-row">
            <svg width="672" height="64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker
                  id="seta1"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta2"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>
              </defs>

              <line
                x1="224"
                y1="0"
                x2="0"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="224"
                y1="0"
                x2="672"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div className="col-start-1">
              <LeafCard
                leafTitle={"Tries"}
                modal={() => openModal("modal8")}
                parentProgress={parentProgress8}
              />
            </div>
            <div className="col-start-4">
              <LeafCard
                leafTitle={"Backtracking"}
                modal={() => openModal("modal9")}
                parentProgress={parentProgress9}
              />
            </div>
          </div>

          <div className="flex flex-row ">
            <svg width="936" height="64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker
                  id="seta1"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta2"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta2"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>
              </defs>

              <line
                x1="112"
                y1="0"
                x2="236"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="820"
                y1="0"
                x2="700"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="820"
                y1="0"
                x2="936"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="grid grid-cols-5 place-items-center gap-10">
            <div className="col-start-2">
              <LeafCard
                leafTitle={"Heap"}
                modal={() => openModal("modal10")}
                parentProgress={parentProgress10}
              />
            </div>
            <div className="col-start-4">
              <LeafCard
                leafTitle={"Graphs"}
                modal={() => openModal("modal11")}
                parentProgress={parentProgress11}
              />
            </div>
            <div className="col-start-5">
              <LeafCard
                leafTitle={"1-D DP"}
                modal={() => openModal("modal12")}
                parentProgress={parentProgress12}
              />
            </div>
          </div>

          <div className="flex flex-row ">
            <svg width="1164" height="64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker
                  id="seta1"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta2"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta3"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta4"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta5"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta6"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>

                <marker
                  id="seta7"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>
              </defs>

              <line
                x1="350"
                y1="0"
                x2="0"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="350"
                y1="0"
                x2="240"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="350"
                y1="0"
                x2="460"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="820"
                y1="0"
                x2="460"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="820"
                y1="0"
                x2="930"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="1050"
                y1="0"
                x2="930"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />

              <line
                x1="1050"
                y1="0"
                x2="1164"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="grid grid-cols-6 gap-10">
            <div className="col-start">
              <LeafCard
                leafTitle={"Intervals"}
                modal={() => openModal("modal13")}
                parentProgress={parentProgress13}
              />
            </div>
            <div>
              <LeafCard
                leafTitle={"Greedy"}
                modal={() => openModal("modal14")}
                parentProgress={parentProgress14}
              />
            </div>
            <div>
              <LeafCard
                leafTitle={"Advanced Graphs"}
                modal={() => openModal("modal15")}
                parentProgress={parentProgress15}
              />
            </div>
            <div className="col-start-5">
              <LeafCard
                leafTitle={"2-D DP"}
                modal={() => openModal("modal16")}
                parentProgress={parentProgress16}
              />
            </div>
            <div className="col-start-6">
              <LeafCard
                leafTitle={"Bit Manipulation"}
                modal={() => openModal("modal17")}
                parentProgress={parentProgress17}
              />
            </div>
          </div>

          <div className="flex flex-row">
            <svg width="1170" height="64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker
                  id="seta1"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>
              </defs>

              <line
                x1="1170"
                y1="0"
                x2="700"
                y2="64"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div className="col-start-3">
              <LeafCard
                leafTitle={"Math e geometry"}
                modal={() => openModal("modal18")}
                parentProgress={parentProgress18}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Sidebar totalProgress={totalProgress} />
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
            { title: "Product of Array Except Self", difficulty: "Medium" },
            { title: "Valid Sudoku", difficulty: "Medium" },
            { title: "Longest Consecutive Sequence ", difficulty: "Hard" },
          ],
        }}
        isOpen={activeModal === "modal1"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress1}
        setLeafProgress={setParentProgress1}
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
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress2}
        setLeafProgress={setParentProgress2}
      />

      <DynamicModal
        data={{
          leafTitle: "Stack",
          leafMaxSize: 6,
          content: [
            { title: "Valid Parentheses", difficulty: "Easy" },
            { title: "Min Stack", difficulty: "Medium" },
            {
              title: "Evaluate Reverse Polish Notation",
              difficulty: "Medium",
            },
            {
              title: "Generate Parentheses",
              difficulty: "Medium",
            },
            {
              title: "Daily Temperatures",
              difficulty: "Medium",
            },
            {
              title: "Car Fleet",
              difficulty: "Medium",
            },
          ],
        }}
        isOpen={activeModal === "modal3"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress3}
        setLeafProgress={setParentProgress3}
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
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress4}
        setLeafProgress={setParentProgress4}
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
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress5}
        setLeafProgress={setParentProgress5}
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
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress6}
        setLeafProgress={setParentProgress6}
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
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress7}
        setLeafProgress={setParentProgress7}
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
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress8}
        setLeafProgress={setParentProgress8}
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
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress9}
        setLeafProgress={setParentProgress9}
      />

      <DynamicModal
        data={{
          leafTitle: "Heap",
          leafMaxSize: 3,
          content: [
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
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress10}
        setLeafProgress={setParentProgress10}
      />

      <DynamicModal
        data={{
          leafTitle: "Graphs",
          leafMaxSize: 3,
          content: [
            { title: "Number of Islands", difficulty: "Medium" },
            { title: "Max Area of Island", difficulty: "Medium" },
            { title: "Clone Graph", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal11"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress11}
        setLeafProgress={setParentProgress11}
      />

      <DynamicModal
        data={{
          leafTitle: "1-D Dynamic Programming",
          leafMaxSize: 3,
          content: [
            { title: "Climbing Stairs", difficulty: "Easy" },
            { title: "Min Cost Climbing Stairs", difficulty: "Easy" },
            { title: "House Robber", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal12"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress12}
        setLeafProgress={setParentProgress12}
      />

      <DynamicModal
        data={{
          leafTitle: "Intervals",
          leafMaxSize: 3,
          content: [
            { title: "Insert Interval", difficulty: "Medium" },
            { title: "Merge Intervals", difficulty: "Medium" },
            { title: "Non Overlapping Intervals", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal13"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress13}
        setLeafProgress={setParentProgress13}
      />

      <DynamicModal
        data={{
          leafTitle: "Greedy",
          leafMaxSize: 3,
          content: [
            { title: "Maximum Subarray", difficulty: "Medium" },
            { title: "Jump Game", difficulty: "Medium" },
            { title: "Jump Game II", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal14"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress14}
        setLeafProgress={setParentProgress14}
      />

      <DynamicModal
        data={{
          leafTitle: "Advanced graphs",
          leafMaxSize: 3,
          content: [
            { title: "Reconstruct Itinerary", difficulty: "Hard" },
            {
              title: "Min Cost to Connect All Points",
              difficulty: "Medium",
            },
            { title: "Network Delay Time", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal15"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress15}
        setLeafProgress={setParentProgress15}
      />

      <DynamicModal
        data={{
          leafTitle: "2-D Dynamic Programming",
          leafMaxSize: 3,
          content: [
            { title: "Unique Paths", difficulty: "Hard" },
            { title: "Longest Common Subsequence", difficulty: "Medium" },
            {
              title: "Best Time to Buy And Sell Stock With Cooldown ",
              difficulty: "Medium",
            },
          ],
        }}
        isOpen={activeModal === "modal16"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress16}
        setLeafProgress={setParentProgress16}
      />

      <DynamicModal
        data={{
          leafTitle: "Bit manipulation",
          leafMaxSize: 3,
          content: [
            { title: "Single Number", difficulty: "Easy" },
            { title: "Number of 1 Bits", difficulty: "Easy" },
            { title: "Counting Bits", difficulty: "Easy" },
          ],
        }}
        isOpen={activeModal === "modal17"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress17}
        setLeafProgress={setParentProgress17}
      />

      <DynamicModal
        data={{
          leafTitle: "Math e geometry",
          leafMaxSize: 3,
          content: [
            { title: "Rotate Image", difficulty: "Medium" },
            { title: "Spiral Matrix", difficulty: "Medium" },
            { title: "Set Matrix Zeroes  ", difficulty: "Medium" },
          ],
        }}
        isOpen={activeModal === "modal18"}
        onClose={closeModal}
        activeModal={activeModal}
        totalProgress={totalProgress}
        setTotalProgress={setTotalProgress}
        leafProgress={parentProgress18}
        setLeafProgress={setParentProgress18}
      />
    </>
  );
}

export default TreemapPage;
