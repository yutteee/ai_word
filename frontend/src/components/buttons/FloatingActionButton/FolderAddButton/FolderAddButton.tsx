"use client";

import React, { useState } from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFolderAdd } from "react-icons/ai";
import { FolderModal } from "@/components/modal/FolderModal/FolderModal";

interface Props {}

export const FolderAddButton: React.FC<Props> = (props) => {
  const labelId = "folder-add-button";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BaseButton labelId={labelId} handleClick={() => setIsOpen(true)}>
        <AiFillFolderAdd size="1rem" />
        <div>単語帳を追加</div>
      </BaseButton>
      {isOpen && <FolderModal labelId={labelId} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
