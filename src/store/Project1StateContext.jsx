import { createContext, useReducer } from 'react';

const initialValue = {
  sidebarActive: false,
  dropdownActive: false,
  onSidebarToggle() {},
  onDropDownToggle() {},
};

export const Project1StateContext = createContext(initialValue);

function reducer(state, action) {
  if (action.type === 'SIDEBAR_TOGGLE') {
    const curState = state.sidebarActive;
    return { ...state, sidebarActive: !curState };
  }

  if (action.type === 'DROPDOWN_TOGGLE') {
    const curState = state.dropdownActive;
    return { ...state, dropdownActive: !curState };
  }
}

export default function Project1StateProvider({ children }) {
  const [{ sidebarActive, dropdownActive }, dispatch] = useReducer(reducer, initialValue);

  function handleSidebarToggle() {
    dispatch({ type: 'SIDEBAR_TOGGLE' });
  }

  function handleDropDownToggle() {
    dispatch({ type: 'DROPDOWN_TOGGLE' });
  }

  const ctxValue = {
    sidebarActive,
    dropdownActive,
    onSidebarToggle: handleSidebarToggle,
    onDropDownToggle: handleDropDownToggle,
  };

  return <Project1StateContext.Provider value={ctxValue}>{children}</Project1StateContext.Provider>;
}
