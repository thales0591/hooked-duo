import PropTypes from "prop-types";


const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="relative flex items-center cursor-pointer box-border w-[43px] justify-center">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div
        className={`w-6 h-6 border-2 rounded border-gray-400 flex items-center justify-center transition-all ${
          checked ? "bg-[#2DEBB1] border-[#2DEBB1]" : "bg-transparent"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};


export default Checkbox;
