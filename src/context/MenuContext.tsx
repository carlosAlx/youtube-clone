import { createContext, useContext, useReducer } from "react";

type MenuContextProvider = {
  children: React.ReactNode;
};
interface State {
  isOpen: boolean;
}
type Action = { type: "TOGGLE" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE":
      return { isOpen: !state.isOpen };
    default:
      throw new Error();
  }
}
interface contextProvider {
  state: State;
  dispatchAction: React.Dispatch<Action>;
}

export const MenuContext = createContext<contextProvider>({
  state: { isOpen: false },
  dispatchAction: () => undefined,
});

export const MenuContextProvider = ({ children }: MenuContextProvider) => {
  const [state, dispatchAction] = useReducer(reducer, { isOpen: false });
  return (
    <MenuContext.Provider value={{ state, dispatchAction }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
