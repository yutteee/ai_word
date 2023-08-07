"use strict";

import React, { useState, useCallback } from "react";
import { BaseModal } from "../BaseModal/BaseModal";
import { TextInput } from "../../forms/TextInput/TextInput";
import { BaseButton } from "../../buttons/BaseButton/BaseButton";
import { db } from "../../../db";

interface Props {
  labelId: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FolderModal: React.FC<Props> = (props) => {
  const { labelId, isOpen, setIsOpen } = props;

  const [folderName, setFolderName] = useState("");

  const addFolder = useCallback(async () => {
    try {
      await db.folders.add({
        folder: folderName,
      });
      console.log("success");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  }, [folderName]);

  return (
    <BaseModal labelId={labelId} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col items-center justify-center gap-4">
        <TextInput label="単語帳名" text={folderName} setText={setFolderName} required />
        <BaseButton outline handleClick={addFolder}>
          <div className="text-base font-normal">追加</div>
        </BaseButton>
      </div>
    </BaseModal>
  );
};
