import { useState } from "react";

const Sidebarteste = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-red-400">
      {/* Botão para abrir a Sidebar */}
      <button
        onClick={toggleSidebar}
        className="p-2 bg-blue-600 text-white rounded-md"
      >
        {isOpen ? "Fechar" : "Abrir"} Sidebar
      </button>

      {/* Fundo escurecido */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar} // Fecha ao clicar no fundo
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center bg-blue-600 text-white">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleSidebar} className="text-white">
            ✕
          </button>
        </div>
        <nav className="p-4">
          <a href="#home" className="text-gray-800 hover:text-blue-600">
            Home
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebarteste;
