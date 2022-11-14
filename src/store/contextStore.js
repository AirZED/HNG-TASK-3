import React from "react";

export const store = React.createContext({
  isVisible: false,
  closeModal: () => {},
  openModal: () => {},
});
