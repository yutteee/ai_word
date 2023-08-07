"use strict";

import React, { useState, useEffect, useCallback } from "react";
import { BaseModal } from "../BaseModal/BaseModal";
import { TextInput } from "@/components/forms/TextInput/TextInput";
import { SelectBox } from "@/components/forms/SelectBox/SelectBox";
import { Textarea } from "@/components/forms/Textarea/Textarea";
import { BaseButton } from "@/components/buttons/BaseButton/BaseButton";
import { db } from "@/db";

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

  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const getFolders = async () => {
      try {
        const folders = await db.folders.toArray();
        const options = folders.map((folder) => folder.folder);
        setOptions(options);
      } catch (error) {
        console.error(error);
      }
    };
    getFolders();
  }, []);

  const addWord = useCallback(() => {
    try {
      db.words.add({
        word_en: wordEnglish,
        word_jp: wordJapanese,
        folder: selectedOption,
        memo: memo,
      });
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

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
        <BaseButton outline handleClick={addWord} labelId={labelId}>
          <div className="text-base font-normal">追加</div>
        </BaseButton>
      </div>
    </BaseModal>
  );
};
