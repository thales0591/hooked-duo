import PropTypes from "prop-types";



const Star = ({ filled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[30px] flex items-center justify-center transition-all ${
        filled ? "text-yellow-500" : "text-yellow-500"
      }`}
      aria-label={filled ? "Desmarcar estrela" : "Marcar estrela"}
    >
      {filled ? (
        // Estrela preenchida
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ) : (
        // Estrela vazada
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.7 5.249a1 1 0 00.95.69h5.518c.969 0 1.371 1.24.588 1.81l-4.473 3.248a1 1 0 00-.364 1.118l1.7 5.25c.3.921-.755 1.688-1.538 1.118l-4.474-3.25a1 1 0 00-1.175 0l-4.474 3.25c-.783.57-1.838-.197-1.538-1.118l1.7-5.25a1 1 0 00-.364-1.118L2.293 10.67c-.783-.57-.38-1.81.588-1.81h5.518a1 1 0 00.95-.69l1.7-5.25z"
          />
        </svg>
      )}
    </button>
  );
};

Star.propTypes = {
  filled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Star;
