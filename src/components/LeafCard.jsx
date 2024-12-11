import PropTypes from "prop-types";

const LeafCard = ({ leafTitle, modal, parentProgress }) => {
  return (
    <div
      className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer flex flex-col justify-center gap-1"
      onClick={() => modal()}
    >
      <button>{leafTitle}</button>

      <div className="w-full flex justify-center">
        <div className="w-[80%] bg-gray-300 rounded-full">
          <div
            className={`bg-[#28ca99] h-1 rounded-full transition-all duration-300`}
            style={{
              width: parentProgress > 0 ? `${parentProgress}%` : "0",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

LeafCard.propTypes = {
  leafTitle: PropTypes.string,
  modal: PropTypes.func,
  parentProgress: PropTypes.number,
};

export default LeafCard;
