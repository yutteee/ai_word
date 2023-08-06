"use client";

import React, { useState } from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFileAdd } from "react-icons/ai";
import { BaseModal } from "../../../modal/BaseModal/BaseModal";
import { TextInput } from "../../../forms/TextInput/TextInput";
import { SelectBox } from "../../../forms/SelectBox/SelectBox";
import { Textarea } from "../../../forms/Textarea/Textarea";

interface Props {}

export const WordAddButton: React.FC<Props> = (props) => {
  const labelId = "word-add-button";
  const sampleOptions = ["単語帳1", "単語帳2", "単語帳3"];

  const [wordEnglish, setWordEnglish] = useState("");
  const [wordJapanese, setWordJapanese] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [memo, setMemo] = useState("");

  return (
    <>
      <BaseButton labelId={labelId}>
        <AiFillFileAdd size="1rem" />
        <div>単語を追加</div>
      </BaseButton>
      <BaseModal labelId={labelId}>
        <div className="flex items-center justify-center flex-col gap-4">
          <div className="w-full">
            <TextInput label="英単語" text={wordEnglish} setText={setWordEnglish} required />
            <TextInput label="日本語訳" text={wordJapanese} setText={setWordJapanese} required />
            <SelectBox
              label="単語帳"
              options={sampleOptions}
              value={selectedOption}
              setValue={setSelectedOption}
            />
            <Textarea label="例文" text={memo} setText={setMemo} />
          </div>
          <BaseButton outline>
            <div className="text-base font-normal">追加</div>
          </BaseButton>
        </div>
      </BaseModal>
    </>
  );
};
