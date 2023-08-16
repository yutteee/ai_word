"use strict";

import React, { useState, useCallback } from "react";
import { BaseModal } from "../BaseModal/BaseModal";
import { TextInput } from "../../forms/TextInput/TextInput";
import { SelectBox } from "../../forms/SelectBox/SelectBox";
import { Textarea } from "../../forms/Textarea/Textarea";
import { BaseButton } from "../../buttons/BaseButton/BaseButton";
import { useOptions } from "./utils/useOptions";
import { addWord } from "./utils/addWord";

interface Props {
  labelId: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WordModal: React.FC<Props> = (props) => {
  const { labelId, isOpen, setIsOpen } = props;

  const [wordEnglish, setWordEnglish] = useState("");
  const [wordJapanese, setWordJapanese] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [memo, setMemo] = useState("");

  const options = useOptions();

  const handleAddWord = useCallback(() => {
    addWord(wordEnglish, wordJapanese, selectedOption, memo, setIsOpen);
  }, [wordEnglish, wordJapanese, selectedOption, memo, setIsOpen]);

  return (
    <BaseModal labelId={labelId} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="w-full">
          <TextInput label="英単語" text={wordEnglish} setText={setWordEnglish} required />
          <TextInput label="日本語訳" text={wordJapanese} setText={setWordJapanese} required />
          <SelectBox
            label="単語帳"
            options={options}
            value={selectedOption}
            setValue={setSelectedOption}
          />
          <Textarea label="例文" text={memo} setText={setMemo} />
        </div>
        <BaseButton outline handleClick={handleAddWord} labelId={labelId}>
          <div className="text-base font-normal">追加</div>
        </BaseButton>
      </div>
    </BaseModal>
  );
};
