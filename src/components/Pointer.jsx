import PropTypes from "prop-types";

const Pointer = ({ width, x1, y1, x2, y2 }) => {
  return (
    <svg width={width} height="64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker
          id="arrowhead"
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

      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="2" />
    </svg>
  );
};

Pointer.propTypes = {
  width: PropTypes.string,
  x1: PropTypes.string,
  y1: PropTypes.string,
  x2: PropTypes.string,
  y2: PropTypes.string,
};

export default Pointer;
