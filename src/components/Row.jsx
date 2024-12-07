import { useState } from "react";
import Checkbox from "./Checkbox";
import Star from "./Star";
import PropTypes from "prop-types";



const Row = ({ problem }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  return (
    <div
      className={`flex flex-row pt-3 justify-around w-full border-b-2 pb-3 border-gray-500 transition-colors duration-300 ${
        isChecked ? "bg-[#2DEBB1] bg-opacity-50" : ""
      } `}
    >
      <div className="w-[43px]">
        <Checkbox checked={isChecked} onChange={setIsChecked} />
      </div>

      <div className="flex gap-52 w-[780px]">
        <div className=" justify-center box-border">
          <Star filled={isFilled} onClick={() => setIsFilled(!isFilled)} />
        </div>
        <h1 className="w-64">{problem.title}</h1>
        <h1 className="w-[65px]">{problem.difficulty}</h1>
      </div>
      <h1>solution</h1>
    </div>
  );
};

Row.propTypes = {
  problem: PropTypes.shape({
    title: PropTypes.string,
    difficulty: PropTypes.string,
  }),
};

export default Row;
