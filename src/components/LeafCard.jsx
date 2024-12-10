import { useModalContext } from "../context/ModalContext"

const LeafCard = ({ leafTitle, modal }) => {
  const {setTitle, setMaxSize, setContentStack } = useModalContext();

 

  return (
    <div
      className="bg-[#5316CC] w-48 h-16 rounded-xl cursor-pointer"
      onClick={() => modal()}
    >
      <button>{leafTitle}</button>
    </div>
  );
};

export default LeafCard;
