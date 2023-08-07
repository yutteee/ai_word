"use client";

import React, { useState } from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFileAdd } from "react-icons/ai";
import { WordModal } from "@/components/modal/WordModal/WordModal";

interface Props {}

export const WordAddButton: React.FC<Props> = (props) => {
  const labelId = "word-add-button";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BaseButton labelId={labelId} handleClick={() => setIsOpen(!isOpen)}>
        <AiFillFileAdd size="1rem" />
        <div>単語を追加</div>
      </BaseButton>
      {isOpen && <WordModal labelId={labelId} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
