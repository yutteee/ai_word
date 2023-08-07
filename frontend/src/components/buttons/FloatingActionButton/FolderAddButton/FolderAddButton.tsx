"use client";

import React, { useState, useCallback } from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFolderAdd } from "react-icons/ai";
import { BaseModal } from "../../../modal/BaseModal/BaseModal";
import { TextInput } from "../../../forms/TextInput/TextInput";
import { db } from "@/db";

interface Props {}

export const FolderAddButton: React.FC<Props> = (props) => {
  const labelId = "folder-add-button";

  const [folderName, setFolderName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <BaseButton labelId={labelId} handleClick={() => setIsOpen(true)}>
        <AiFillFolderAdd size="1rem" />
        <div>単語帳を追加</div>
      </BaseButton>
      <BaseModal labelId={labelId} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col items-center justify-center gap-4">
          <TextInput label="単語帳名" text={folderName} setText={setFolderName} required />
          <BaseButton outline handleClick={addFolder}>
            <div className="text-base font-normal">追加</div>
          </BaseButton>
        </div>
      </BaseModal>
    </>
  );
};
