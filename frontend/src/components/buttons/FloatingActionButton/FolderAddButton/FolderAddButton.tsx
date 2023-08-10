"use client";

import React, { useState, useCallback } from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFolderAdd } from "react-icons/ai";
import { FolderModal } from "../../../modal/FolderModal/FolderModal";
import { db } from "../../../../db";
import { useFoldersDispatch } from "../../../../app/FoldersContext";

interface Props {}

export const FolderAddButton: React.FC<Props> = (props) => {
  const labelId = "folder-add-button";
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useFoldersDispatch();

  const addFolder = useCallback(async (folderName: string) => {
    try {
      await db.folders.add({
        folder: folderName,
      });
      dispatch({ type: "add", payload: { folderName: folderName, wordsCount: 0 } });
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <BaseButton labelId={labelId} handleClick={() => setIsOpen(true)}>
        <AiFillFolderAdd size="1rem" />
        <div>単語帳を追加</div>
      </BaseButton>
      {isOpen && (
        <FolderModal
          labelId={labelId}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleClick={addFolder}
        />
      )}
    </>
  );
};
