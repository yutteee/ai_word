import React from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { BiSolidEdit } from "react-icons/bi";
import { BaseModal } from "../../../modal/BaseModal/BaseModal";

interface Props {}

export const ArticleAddButton: React.FC<Props> = (props) => {
  const labelId = "article-add-button";
  return (
    <>
      <BaseButton labelId={labelId}>
        <BiSolidEdit size="1rem" />
        <div>文章を追加</div>
      </BaseButton>
      <BaseModal labelId={labelId}>
        <div>hogehoge</div>
      </BaseModal>
    </>
  );
};
