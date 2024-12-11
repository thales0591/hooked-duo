import PropTypes from "prop-types";
import logo from "../assets/símbolo.png";
import { useModalContext } from "../context/ModalContext";

const Sidebar = ({ totalProgress }) => {
  const { currentProgress, currentProgressNumber } = useModalContext();

  return (
    <div
      className={`fixed right-0 top-0 w-64 h-full bg-gradient-to-b bg-[#231f5f] shadow-2xl text-white rounded-xl flex flex-col items-center transition-all duration-300`}
    >
      <>
        <div className="flex flex-col items-center mt-8 font-roboto">
          <img
            src={logo}
            alt="Coding"
            className="w-16 h-16 object-contain mb-2"
          />
          <p className="text-lg font-semibold">Borderless Coding</p>
        </div>

        <div className="w-11/12 mt-8 font-roboto font-semibold">
          <p className="text-lg mb-2 text-white flex justify-center">
            Progress
          </p>
          <p className="text-sm mb-2 text-gray-300 flex justify-center">
            ({currentProgressNumber} / {totalProgress})
          </p>
          <div className="w-full bg-gray-600 h-2 rounded-full">
            <div
              className="bg-[#2DEBB1] h-full rounded-full"
              style={{ width: `${currentProgress}%` }}
            ></div>
          </div>
        </div>
      </>
    </div>
  );
};

Sidebar.propTypes = {
  totalProgress: PropTypes.number,
};

export default Sidebar;
