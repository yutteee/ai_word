"use strict";

import React, { useState } from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { BiSolidEdit } from "react-icons/bi";
import { BaseModal } from "../../../modal/BaseModal/BaseModal";

interface Props {}

export const ArticleAddButton: React.FC<Props> = (props) => {
  const labelId = "article-add-button";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BaseButton labelId={labelId} handleClick={() => setIsOpen(true)}>
        <BiSolidEdit size="1rem" />
        <div>文章を追加</div>
      </BaseButton>
      <BaseModal labelId={labelId} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>hogehoge</div>
      </BaseModal>
    </>
  );
};
