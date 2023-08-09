"use client";

import React, { useState, memo } from "react";
import { BaseModal } from "../BaseModal/BaseModal";
import { TextInput } from "../../forms/TextInput/TextInput";
import { BaseButton } from "../../buttons/BaseButton/BaseButton";

interface Props {
  labelId: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (name: string) => void;
  name?: string;
}

export const FolderModal: React.FC<Props> = memo((props) => {
  const { labelId, isOpen, setIsOpen, handleClick, name } = props;

  const [folderName, setFolderName] = useState(name || "");

  const handleFolderName = () => {
    setIsOpen(false);
    handleClick(folderName);
  };

  return (
    <BaseModal labelId={labelId} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col items-center justify-center gap-4">
        <TextInput label="単語帳名" text={folderName} setText={setFolderName} required />
        <BaseButton outline handleClick={handleFolderName}>
          <div className="text-base font-normal">確定</div>
        </BaseButton>
      </div>
    </BaseModal>
  );
});
