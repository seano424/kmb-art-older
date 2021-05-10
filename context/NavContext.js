import { createContext } from "react";
import useToggle from "../hooks/useToggle";

export const NavContext = createContext();

export function NavProvider(props) {
  const [open, toggleOpen] = useToggle();

  return (
    <NavContext.Provider value={{ open, toggleOpen }}>
      {props.children}
    </NavContext.Provider>
  );
}
