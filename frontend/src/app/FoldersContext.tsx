"use client";

import React, { createContext, useContext, useReducer } from "react";

type FolderAndCount = {
  folderName: string;
  wordsCount: number;
};

const FoldersContext = createContext<FolderAndCount[]>([]);
const FoldersDispatchContext = createContext<React.Dispatch<{ type: string; payload: any }>>(
  () => {}
);

export function FoldersProvider({ children }: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(foldersReducer, []);

  return (
    <FoldersContext.Provider value={state}>
      <FoldersDispatchContext.Provider value={dispatch}>{children}</FoldersDispatchContext.Provider>
    </FoldersContext.Provider>
  );
}

export function useFolders() {
  return useContext(FoldersContext);
}

export function useFoldersDispatch() {
  return useContext(FoldersDispatchContext);
}

function foldersReducer(state: FolderAndCount[], action: { type: string; payload: any }) {
  console.log(action);
  switch (action.type) {
    case "init":
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((folder: FolderAndCount) => folder.folderName !== action.payload);
    case "update":
      return state.map((folder: FolderAndCount) => {
        if (folder.folderName === action.payload.id) {
          return { ...folder, folderName: action.payload.folderName };
        }
        return folder;
      });
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
