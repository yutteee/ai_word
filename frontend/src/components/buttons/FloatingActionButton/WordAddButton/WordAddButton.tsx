"use client";

import React, { useState, useEffect, useCallback } from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFileAdd } from "react-icons/ai";
import { BaseModal } from "../../../modal/BaseModal/BaseModal";
import { TextInput } from "../../../forms/TextInput/TextInput";
import { SelectBox } from "../../../forms/SelectBox/SelectBox";
import { Textarea } from "../../../forms/Textarea/Textarea";
import { db } from "@/db";

interface Props {}

export const WordAddButton: React.FC<Props> = (props) => {
  const labelId = "word-add-button";
  const sampleOptions = ["単語帳1", "単語帳2", "単語帳3"];

  const [wordEnglish, setWordEnglish] = useState("");
  const [wordJapanese, setWordJapanese] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [memo, setMemo] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // TODO: folderから、選択肢を取得する
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const getFolders = async () => {
      try {
        const folders = await db.folders.toArray();
        const options = folders.map((folder) => folder.folder);
        console.log(options);
        setOptions(options);
      } catch (error) {
        console.log(error);
      }
    };
    getFolders();
  }, []);

  // TODO: 保存ボタンを押したら、DBに保存する
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
    <>
      <BaseButton labelId={labelId} handleClick={() => setIsOpen(!isOpen)}>
        <AiFillFileAdd size="1rem" />
        <div>単語を追加</div>
      </BaseButton>
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
    </>
  );
};
