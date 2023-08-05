import React from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFolderAdd } from "react-icons/ai";
import { BaseModal } from "../../../modal/BaseModal/BaseModal";

interface Props {}

export const FolderAddButton: React.FC<Props> = (props) => {
  const labelId = "folder-add-button";
  return (
    <>
      <BaseButton labelId={labelId}>
        <AiFillFolderAdd size="1rem" />
        <div>単語帳を追加</div>
      </BaseButton>
      <BaseModal labelId={labelId}>
        <div>hogehoge</div>
      </BaseModal>
    </>
  );
};
