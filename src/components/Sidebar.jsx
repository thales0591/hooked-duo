import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  //${ isOpen ? 'pointer-events-auto'}
  return (
    <>
        <div className="relative">
            <div className={`fixed inset-0 bg-black bg-opacity-50`} onClick={() => toggleSidebar()} >
                Sidebar
            </div>
            <div className={`fixed top-0 right-0 h-full w-3/4 bg-[#26236b] shadow-lg transform transition-transform duration-300 ${ isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            </div>
        </div>
    </>
 
);
};

export default Sidebar;
