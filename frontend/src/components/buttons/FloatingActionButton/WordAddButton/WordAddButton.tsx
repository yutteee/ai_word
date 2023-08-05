import React from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFileAdd } from "react-icons/ai";
import { BaseModal } from "../../../modal/BaseModal/BaseModal";

interface Props {}

export const WordAddButton: React.FC<Props> = (props) => {
  const labelId = "word-add-button";
  return (
    <>
      <BaseButton labelId={labelId}>
        <AiFillFileAdd size="1rem" />
        <div>単語を追加</div>
      </BaseButton>
      <BaseModal labelId={labelId}>
        <div>hogehoge</div>
      </BaseModal>
    </>
  );
};
