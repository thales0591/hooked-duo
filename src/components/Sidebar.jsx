import { useState } from "react";

const Sidebar = ({text}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  //${ isOpen ? 'pointer-events-auto'}
  return (
    <>
        <div className="relative">
            <div className={`fixed inset-0 bg-black bg-opacity-50 
              ${ isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
              onClick={() => toggleSidebar()} >
            </div>
            <div className={`fixed top-0 right-0 h-full w-3/4 bg-[#26236b] shadow-lg transform text-white transition-transform duration-300 ${ isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <h1>{text}</h1>
            </div>
        </div>
    </>
 
);
};

export default Sidebar;
