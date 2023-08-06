"use client";

import React, { useState } from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFolderAdd } from "react-icons/ai";
import { BaseModal } from "../../../modal/BaseModal/BaseModal";
import { TextInput } from "../../../forms/TextInput/TextInput";

interface Props {}

export const FolderAddButton: React.FC<Props> = (props) => {
  const labelId = "folder-add-button";

  const [folderName, setFolderName] = useState("");

  return (
    <>
      <BaseButton labelId={labelId}>
        <AiFillFolderAdd size="1rem" />
        <div>単語帳を追加</div>
      </BaseButton>
      <BaseModal labelId={labelId}>
        <div className="flex flex-col items-center justify-center gap-4">
          <TextInput label="単語帳名" text={folderName} setText={setFolderName} required />
          <BaseButton outline>
            <div className="text-base font-normal">追加</div>
          </BaseButton>
        </div>
      </BaseModal>
    </>
  );
};
