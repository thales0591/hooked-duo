import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentStack, setContentStack] = useState([]);
  const [title, setTitle] = useState("");
  const [maxSize, setMaxSize] = useState(0);
  const [actualSize, setActualSize] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentProgressNumber, setCurrentProgressNumber] = useState(0);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        contentStack,
        setContentStack,
        title,
        setTitle,
        maxSize,
        setMaxSize,
        actualSize,
        setActualSize,
        currentProgress,
        setCurrentProgress,
        currentProgressNumber,
        setCurrentProgressNumber,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  children: PropTypes.node,
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    console.log("Contexto não encontrado!");
  }

  return context;
};
