import PropTypes from "prop-types";
import { useState } from "react";
import { FaVideo } from "react-icons/fa";
import Checkbox from "./Checkbox";
import Star from "./Star";

const Row = ({
  problem,
  parentProgress,
  setParentProgress,
  actualSize,
  setActualSize,
  maxSize,
  leafProgress,
  setLeafProgress,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div
      className={`flex flex-row pt-3 justify-around w-full border-b-2 pb-3 border-gray-500 transition-colors duration-300 ${
        isChecked ? "bg-[#2DEBB1] bg-opacity-50" : ""
      } `}
    >
      <div className="w-[43px] flex items-center">
        <Checkbox
          checked={isChecked}
          onChange={setIsChecked}
          parentProgress={parentProgress}
          setParentProgress={setParentProgress}
          actualSize={actualSize}
          setActualSize={setActualSize}
          maxSize={maxSize}
          leafProgress={leafProgress}
          setLeafProgress={setLeafProgress}
        />
      </div>

      <div className="flex gap-52 w-[780px] items-center">
        <div className=" justify-center box-border">
          <Star filled={isFilled} onClick={() => setIsFilled(!isFilled)} />
        </div>
        <h1 className="w-64">{problem.title}</h1>
        <h1
          className={`w-[65px] flex justify-center items-center
          ${problem.difficulty == "Easy" && "text-green-400"}
          ${problem.difficulty == "Medium" && "text-yellow-400"}
          ${problem.difficulty == "Hard" && "text-red-500"}`}
        >
          {problem.difficulty}
        </h1>
      </div>
      <div className=" flex justify-center w-[60px] items-center">
        <h1>
          {" "}
          <FaVideo className="w-6 h-6 cursor-pointer" />
        </h1>
      </div>
    </div>
  );
};

Row.propTypes = {
  problem: PropTypes.shape({
    title: PropTypes.string,
    difficulty: PropTypes.oneOf(["Easy", "Medium", "Hard"]),
  }),
  parentProgress: PropTypes.number,
  setParentProgress: PropTypes.func,
  actualSize: PropTypes.number,
  setActualSize: PropTypes.func,
  maxSize: PropTypes.number,
  leafProgress: PropTypes.number,
  setLeafProgress: PropTypes.func,
};

export default Row;
