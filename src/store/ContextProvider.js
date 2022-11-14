import { useState } from "react";

//import store
import { store } from "./contextStore";

const ContextProvider = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModalHandler = () => {
    setIsVisible(true);
  };

  const closeModalHandler = () => {
    setIsVisible(false);
  };

  const activeState = {
    isVisible: isVisible,
    closeModal: closeModalHandler,
    openModal: openModalHandler,
  };

  return <store.Provider value={activeState}>{props.children}</store.Provider>;
};

export default ContextProvider;
